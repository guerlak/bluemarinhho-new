export default function Videos() {
    return (

        <section id="videos" className="p-8 bg-gray-100">


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="aspect-video w-full">
                    <iframe
                        className="w-full h-full rounded shadow"
                        src="https://www.youtube.com/embed/7CZE-nETrN8"
                        title="Video 1"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="aspect-video w-full">
                    <iframe
                        className="w-full h-full rounded shadow"
                        src="https://www.youtube.com/embed/kd57l2z8Pz8"
                        title="Video 2"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    )
}
