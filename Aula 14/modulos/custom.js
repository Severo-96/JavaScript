export default function custom(url) {
    const eventoChange = new CustomEvent("onstatechange", { detail: { url: url } });
    return eventoChange;
}