import { Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
export const ProjectCard = ({ title, description, imgUrl, linkUrl }) => {
  console.log('linkUrl: ', linkUrl);
  return (
    <Col size={12} sm={6} md={4}>
        <a href={linkUrl} target="_blank">
          <div className="proj-imgbx card-img">
              <img className="" src={imgUrl} />
            <div className="proj-txtx">
              <h4>{title}</h4>
              <span>{description}</span>
            </div>
          </div>
      </a>
    </Col>
  )
}