const clientId = "77cb974381b54455862c9dc7d5293809";
const redirectUri = "http://localhost:3000/search";
const authorizationEndpoint = "https://accounts.spotify.com/authorize";
const tokenEndpoint = "https://accounts.spotify.com/api/token";
const scope = "playlist-modify-public playlist-modify-private";

// Authorization Code with PKCE Flow

export const Spotify = {
  async redirectToSpotifyAuthorize() {
    const generateRandomString = (length) => {
      const possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      const values = crypto.getRandomValues(new Uint8Array(length));
      return values.reduce((acc, x) => acc + possible[x % possible.length], "");
    };

    const codeVerifier = generateRandomString(64);

    const sha256 = async (plain) => {
      const encoder = new TextEncoder();
      const data = encoder.encode(plain);
      return window.crypto.subtle.digest("SHA-256", data);
    };

    const base64encode = (input) => {
      return btoa(String.fromCharCode(...new Uint8Array(input)))
        .replace(/=/g, "")
        .replace(/\+/g, "-")
        .replace(/\//g, "_");
    };

    window.localStorage.setItem("code_verifier", codeVerifier);

    const hashed = await sha256(codeVerifier);
    const codeChallenge = base64encode(hashed);

    const authUrl = new URL(authorizationEndpoint);
    const params = {
      response_type: "code",
      client_id: clientId,
      scope: scope,
      code_challenge_method: "S256",
      code_challenge: codeChallenge,
      redirect_uri: redirectUri,
    };
    authUrl.search = new URLSearchParams(params).toString();
    window.location.href = authUrl.toString(); // Redirect the user to the authorization server for login
  },

  async getToken(code) {
    const code_verifier = localStorage.getItem("code_verifier");

    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id: clientId,
        grant_type: "authorization_code",
        code: code,
        redirect_uri: redirectUri,
        code_verifier: code_verifier,
      }),
    };

    const response = await fetch(tokenEndpoint, payload);

    return await response.json();
  },

  async search(input) {
    const type = "album,artist,track";
    const accessToken = window.localStorage.getItem("access_token");
    const limit = 15;

    let url = "https://api.spotify.com/v1/search?";
    url += "q=" + input;
    url += "&type=" + type;
    url += "&limit=" + limit;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
      });

      if (response.ok) {
        const jsonResponse = await response.json();
        return jsonResponse;
      }

      throw new Error("Search request failed!");
    } catch (error) {
      console.log(error);
    }
  },
};

// Data structure that manages the current active token, caching it in localStorage
const currentToken = {
    access_token() {
      return window.localStorage.getItem("access_token") || null;
    },
  
    refresh_token() {
      return window.localStorage.getItem("refresh_token") || null;
    },
  
    expires_in() {
      return window.localStorage.getItem("refresh_in") || null;
    },
  
    expires() {
      return window.localStorage.getItem("expires") || null;
    },
  
    save(response) {
      const { access_token, refresh_token, expires_in } = response;
      window.localStorage.setItem("access_token", access_token);
      window.localStorage.setItem("refresh_token", refresh_token);
      window.localStorage.setItem("expires_in", expires_in);
  
      const now = new Date();
      const expiry = new Date(now.getTime() + expires_in * 1000);
      window.localStorage.setItem("expires", expiry);
  
      console.log("access_token: ", window.localStorage.getItem("access_token"));
      console.log(
        "refresh_token: ",
        window.localStorage.getItem("refresh_token")
      );
      console.log("expires_in: ", window.localStorage.getItem("expires_in"));
      console.log("expires: ", window.localStorage.getItem("expires"));
    },
  };
  
  // On page load, try to fetch auth code from current browser search URL
  const args = new URLSearchParams(window.location.search);
  const code = args.get('code');
  
  // If we find a code, we're in a callback, do a token exchange
  if (code) {
    const token = await Spotify.getToken(code);
    currentToken.save(token);
  
    // Remove code from URL so we can refresh correctly.
    const url = new URL(window.location.href);
    url.searchParams.delete("code");
  
    const updatedUrl = url.search ? url.href : url.href.replace('?', '');
    window.history.replaceState({}, document.title, updatedUrl);
  }