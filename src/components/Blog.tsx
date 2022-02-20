import styled from "styled-components";
import Title from "../shered/Components/Title";
import Img1 from "../images/blog-1.png";
import Img2 from "../images/blog-2.png";
import Img3 from "../images/blog-3.png";
import Img4 from "../images/blog-4.png";
import Img5 from "../images/blog-5.png";
import { color, mixin } from "../shered/styles";
import Description from "../shered/Components/Description";
import Button from "../shered/Components/Button";

const StyledBlog = styled.section`
  padding: 2rem 18rem;

  @media only screen and (max-width: 1300px) {
    padding: 2rem 8rem;
  }
  @media only screen and (max-width: 900px) {
    padding: 2rem 3rem;
  }
`;

const ActiveBlogPost = styled.div`
  width: 100%;
  padding-bottom: 4rem;
  display: flex;
  border-bottom: 1px solid ${mixin.rgba(color.secondary, 0.4)};
  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const Box1 = styled.img`
  width: 40%;
  object-fit: cover;
  object-position: 80%;
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;
const Box2 = styled.div`
  padding-left: 4rem;
  width: 60%;
  @media only screen and (max-width: 900px) {
    width: 100%;
    padding-left: 0;
    h4 {
      margin: 3rem 0;
    }
  }
  h4 {
    margin: 1rem 0;
    font-size: 2rem;
    color: ${color.primary};
    @media only screen and (max-width: 900px) {
      margin: 3rem 0 0;
    }
  }
  p {
    padding: 1rem 0;
  }
`;

const BlogPosts = styled.div`
  width: 100%;
  padding: 4rem 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const BlogPost = styled.div`
  width: 22%;
  display: flex;
  margin: 1rem;
  flex-direction: column;
  @media only screen and (max-width: 900px) {
    width: 45%;
  }
  @media only screen and (max-width: 450px) {
    width: 100%;
  }
`;

interface Box3Props {
  item: string;
}

const Box3 = styled.div<Box3Props>`
  position: relative;
  cursor: pointer;

  img {
    width: 100%;
    object-fit: cover;
  }

  &:hover::after {
    content: "${(props) => props.item}";
    color: ${color.tertiary};
    ${mixin.center}
    text-align: center;
    font-size: 1.8rem;
    transition: all 0.2s ease-in-out;
    z-index: 100;
    ${mixin.coverParent};
    background-color: ${mixin.rgba(color.secondary, 0.8)};
  }
`;

const Box4 = styled.div`
  width: 100%;
  height: 50%;

  p {
    line-height: 2rem;
    font-size: 1.6rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 10;
    -webkit-box-orient: vertical;
    span {
      display: block;
      white-space: pre-wrap;
      font-size: 2rem;
      font-weight: 500;
      color: ${color.primary};
      @media only screen and (max-width: 900px) {
        margin: 3rem 0 0;
      }
    }
  }
`;

const Blog = () => {
  return (
    <StyledBlog>
      <Title
        color1={color.secondary}
        color2={color.primary}
        margin="0 auto 4rem auto"
        padding="0 3rem"
      >
        Blog
      </Title>
      <ActiveBlogPost>
        <Box1 src={Img1}></Box1>
        <Box2>
          <h4>Blog post title 1</h4>
          <Description
            after={false}
            color={color.secondary}
            margin="0"
            fontSize="1.6rem"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium totam rem aperiam eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae.
          </Description>
          <Button
            color={color.primary}
            bgColor={color.tertiary}
            margin="1rem 0 0"
            padding="1rem 5rem 1rem 0"
            fontSize="1.8rem"
            after
          >
            Read more
          </Button>
        </Box2>
      </ActiveBlogPost>
      <BlogPosts>
        {[
          "Blog post title 2",
          "Blog post title 3",
          "Blog post title 4",
          "Blog post title longer title that goes in two rows",
        ].map((item, index) => (
          <BlogPost key={index}>
            <Box3 item={item}>
              <img
                src={
                  index + 2 === 2
                    ? Img2
                    : index + 2 === 3
                    ? Img3
                    : index + 2 === 4
                    ? Img4
                    : Img5
                }
                alt={item}
              ></img>
            </Box3>
            <Box4>
              <p>
                <span>{item}</span>
                <br></br> Lorem ipsum dolor sit amet, consectetur adipisicing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Sed ut perspiciatis unde omnis iste
                natus error sit voluptatem accusantium doloremque laudantium
                totam rem aperiam eaque ipsa quae ab illo inventore veritatis et
                quasi architecto beatae.
              </p>
              <Button
                color={color.primary}
                bgColor={color.tertiary}
                padding="1rem 5rem 1rem 0"
                fontSize="1.8rem"
                after
              >
                Read more
              </Button>
            </Box4>
          </BlogPost>
        ))}
      </BlogPosts>
    </StyledBlog>
  );
};

export default Blog;
