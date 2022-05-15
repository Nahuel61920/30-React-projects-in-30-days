
export const LoadingCard = () => {
    return (
        <div class="w-full rounded overflow-hidden shadow-lg m-2">
            <div class="w-full h-64 bg-gray-300 animate-pulse"></div>
            <div class="px-6 py-4 items-center">
                <div class="font-regular text-xl mb-2 w-20 h-4 bg-gray-300 animate-pulse"></div>
            </div>
        </div>
    );
}

export const LoadingPosts = () => {
    const loadPages = [1, 2, 3, 4, 5, 6];
    return (
        <div className="grid grid-cols-3 gap-4 content-start">
        {loadPages.map(num => {return <LoadingCard />})}
        </div>
    );
}