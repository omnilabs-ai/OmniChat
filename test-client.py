import requests

# API configuration
API_KEY = "test-sk1o83e"
BASE_URL = "https://omni-router.vercel.app/"  # Replace with your actual API base URL

# Headers with API key
headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

def make_api_request():
    try:
        # Make GET request to the API
        response = requests.post(
            f"{BASE_URL}/v1/router/select-model",  # Replace with your specific endpoint
            headers=headers,
            json={
                "messages": [
                    {
                        "role": "user",
                        "content": "Hello, how are you?"
                    }
                ]
            }
        )
        
        # Check if request was successful
        response.raise_for_status()
        
        # Parse and return the JSON response
        return response.json()
    
    except requests.exceptions.RequestException as e:
        print(f"Error making API request: {e}")
        return None

def main():
    # Make the API request
    result = make_api_request()
    
    # Print the result
    if result:
        print("API Response:", result)
    
if __name__ == "__main__":
    main()
