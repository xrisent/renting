export async function GET() {
    return new Response(JSON.stringify({ message: 'Success' }), {
      status: 200,
    });
  }
  