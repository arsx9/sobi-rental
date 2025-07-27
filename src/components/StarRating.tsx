import { Star } from "lucide-react";
function StarRating(){
    return (
        <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" className="mr-1" />
            ))}
        </div>
    );
}
export default StarRating;