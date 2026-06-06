export const EventPropagation = () => {
    const handleGradientParent = () => {
        console.log("gradient parent clicked");
    };
    const handleParentClick = () => {
        console.log("parent clicked");
    };
    const handleChildClick = (event) => {
        console.log(event);
        event.stopPropagation();
        console.log("child clicked");
    };

    return (
        <section className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-10 rounded-xl" onClick={handleGradientParent}>
                <div className="bg-white p-6 rounded-lg shadow-md" onClick={handleParentClick}>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleChildClick}>
                        Child div
                    </button>
                </div>
            </div>
        </section>
    );
};
