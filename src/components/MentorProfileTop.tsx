
function MentorProfileTop() {
    return (
        <div className="relative w-full h-96 flex flex-col justify-evenly mb-6">
            <div className="px-5 pt-72">
                <p className="font-bold text-xl text-slate-900">Mentor Name</p>
                <p className="text-slate-700">Mentor track</p>
            </div>
            <img
                src="/src/assets/mentor-1.webp"
                alt="landing-1"
                className="absolute -z-10 w-full h-96 object-cover"
            />
        </div>
    )
}

export default MentorProfileTop