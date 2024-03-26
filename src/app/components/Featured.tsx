import { useState, useEffect } from "react";
import Image from "next/image";
import { IoSearchCircle } from "react-icons/io5";
import { Reveal } from "../reveal";
import { FaMagnifyingGlass } from "react-icons/fa6";
import "./Featured.css";
// import images from '../../assets/images/images';

const Featured = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["Premium", "Top-Notch", "Prime", "High Quality"];
  const word = words[wordIndex];
  const [typing, setTyping] = useState("");
  const typingSpeed = 200; // Adjust the speed as needed
  // const [image, setImage] = useState(1);

  const majorImage =
    "https://res.cloudinary.com/dtujpq8po/image/upload/v1704475612/tyykkuey1qh103qbu613.png";

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (typing.length < word.length) {
      timeoutId = setTimeout(() => {
        setTyping(word.slice(0, typing.length + 1));
      }, typingSpeed);
    } else {
      timeoutId = setTimeout(() => {
        setTyping("");
        setWordIndex((wordIndex + 1) % words.length);
      }, typingSpeed * 15); // Delay before clearing and switching to the next word
    }

    return () => clearTimeout(timeoutId);
  }, [typing, word, wordIndex]);

  return (
    <div className="featured">
      <div className="featured-container">
        <div className="left">
          <Reveal>
            <h1 className="home-text font-sans">
              find the perfect <span className="freelance">{typing}</span>{" "}
              services for your business
            </h1>
          </Reveal>
          <div className="search">
            <div className="search-input">
              <Reveal>
                <FaMagnifyingGlass />
              </Reveal>
              <Reveal>
                <input
                  type="text"
                  placeholder="What specific services?"
                  className="feature_input font-sans"
                />
              </Reveal>
            </div>
            <Reveal>
              <button className="search-btn font-sans">
                Search
                <IoSearchCircle className="io-circle" />
              </button>
            </Reveal>
          </div>
          <div className="mt-4">
            <Reveal>
              <span className="font-sans">Popular:</span>
            </Reveal>
            <div className="popular">
              <Reveal>
                <button className="popular-btn font-sans">Architecture</button>
              </Reveal>
              <Reveal>
                <button className="popular-btn font-sans">Generative AI</button>
              </Reveal>
              <Reveal>
                <button className="popular-btn font-sans">Logo Design</button>
              </Reveal>
              <Reveal>
                <button className="popular-btn font-sans">Plumbing</button>
              </Reveal>
            </div>
          </div>
        </div>
        <div className="right">
          {/* <Reveal> */}
          <Image
            src={majorImage}
            alt="main image"
            className="main-image"
            width={800}
            height={600}
          />
          {/* </Reveal> */}
        </div>
      </div>
    </div>
  );
};

export default Featured;
