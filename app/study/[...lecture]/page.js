const LectureDetails = ({ params }) => {
    return <div>
        <div>Welcome to Lecture Details</div>
        <h2>Day Of College{params.lecture[0]}</h2>
        <h3>Lecture Number: {params.lecture[1]}</h3>
    </div>
};

export default LectureDetails;