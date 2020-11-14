import Directory from "../../components/directory/Directory";
import "./Homepage.scss";

const Homepage = (props) => {
    console.log(props);
    return (
        <div className="homepage">
            <Directory></Directory>
        </div>
    );
};

export default Homepage;
