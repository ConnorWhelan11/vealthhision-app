export async function POST(req) {
  // Mock response data
  const data = { message: 'Hello world' };

  // Return response with JSON data
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function GET(req) {
  // Mock response data
  const data = { message: 'Hello world' };

  // Return response with JSON data
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' }
  });
}
