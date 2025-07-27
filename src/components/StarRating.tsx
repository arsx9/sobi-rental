function StarRating({ rating = 0 }){
    return (
        <div className="flex items-center">
            {[...Array(5)].map((_, i) => {
                const starValue = i + 1;

                let icon = "/assets/icons/starempty.png";
                if (rating >= starValue) {
                    icon = "/assets/icons/starfilled.png";
                } else if (rating >= starValue - 0.5) {
                    icon = "/assets/icons/starhalffilled.png";
                }

                return (
                    <img
                        key={i}
                        src={icon}
                        alt="star"
                        className="w-4 h-4 mr-1"
                    />
                );
            })}
        </div>
    );
}
export default StarRating;