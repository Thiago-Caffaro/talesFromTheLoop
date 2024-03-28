export async function fetchPagesContentList() {
    try {
        const response = await fetch('https://api.caffaro.cloud');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro:', error);
    }
}
