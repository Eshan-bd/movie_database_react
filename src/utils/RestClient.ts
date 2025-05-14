class RestClient {
    constructor(private baseUrl: string) {}
  
    async get<T>(endpoint: string): Promise<T> {
      const res = await fetch(`${this.baseUrl}${endpoint}`);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return res.json();
    }
  
    // Add POST, PUT, DELETE methods as needed
  }
  
  export const restClient = new RestClient("http://127.0.0.1:8000/api/v1");