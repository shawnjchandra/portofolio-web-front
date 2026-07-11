import { createSignal, type Component } from 'solid-js';

const Home: Component = () => {
    const [result, setResult ] = createSignal<string | null>(null);
    const [loading, setLoading] = createSignal(false);
    const [error, setError] = createSignal<string | null>(null);
    
    const handleClick = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch('/v2/test');
            if (!res.ok) throw new Error(`Status : ${res.status}`);

            const data = await res.json();
            setResult(JSON.stringify(data));
        } catch (error) {
            setError(error instanceof Error ? error.message : "Unknown Error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div class="bg-amber-50 h-svh flex flex-col items-center justify-center gap-4">
            <p class="text-black">Hello</p>

            <button
                class="px-4 py-2 bg-neutral-900 text-white rounded hover:bg-neutral-700 disabled:opacity-50"
                onClick={handleClick}
                disabled={loading()}
            >
                {loading() ? 'Loading...' : 'Hit /v2/test'}
            </button>

            {error() && <p class="text-red-600">Error: {error()}</p>}
            {result() && <p class="text-black">Response: {result()}</p>}
            </div>
    );
};

export default Home;