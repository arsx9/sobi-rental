function ShowMap() {
    return(
        <div className="w-full px-5 mt-15">
            <div className="text-xl font-semibold mb-5 text-gray-800">
                Where you'll be
            </div>
            <p className="mb-5 text-gray-600">
                Everett, Massachusetts, United States
            </p>
            <div className="w-full h-auto rounded-lg overflow-hidden">
                <img
                    src="/assets/icons/map.png"
                    alt="map"
                    className="w-full h-full block"
                />
            </div>
        </div>
    );
}
export default ShowMap;