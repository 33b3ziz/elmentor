import MentorCounter from '@/components/MentorCounter';
import MentorProfileTop from '@/components/MentorProfileTop';
import MentorSection from '@/components/MentorSection';


function MentorProfile() {
    return (
        <section className="py-12  px-4 md:px-12">
            <MentorProfileTop />
            <MentorCounter />
            <MentorSection />
        </section>
    )
}

export default MentorProfile
