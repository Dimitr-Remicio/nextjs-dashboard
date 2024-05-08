'use client';

import React, { useState, useEffect, useCallback } from 'react';

// import "./slider.css";

export default function CustomSlider({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDone, setSlideDone] = useState(true);
  const [timeID, setTimeID] = useState(null);
  

  const slideNext = useCallback(() => {
    setActiveIndex((val) => {
      if (val >= children.length - 1) {
        return 0;
      } else {
        return val + 1;
      }
    });
  },[children.length]);


  useEffect(() => {
    if (slideDone) {
      setSlideDone(false);
      setTimeID(
        setTimeout(() => {
          slideNext();
          setSlideDone(true);
        }, 5000),
      );
    }
  }, [slideDone, slideNext]);

  const slidePrev = () => {
    setActiveIndex((val) => {
      if (val <= 0) {
        return children.length - 1;
      } else {
        return val - 1;
      }
    });
  };

  const AutoPlayStop = () => {
    if (timeID > 0) {
      clearTimeout(timeID);
      setSlideDone(false);
    }
  };

  const AutoPlayStart = () => {
    if (!slideDone) {
      setSlideDone(true);
    }
  };

  return (
    <div
      className="container__slider "
      onMouseEnter={AutoPlayStop}
      onMouseLeave={AutoPlayStart}
    >
      {children.map((item, index) => {
        return (
          <div
            className={'slider__item slider__item-active-' + (activeIndex + 1)}
            key={index}
          >
            {item}
          </div>
        );
      })}

      <div className="container__slider__links ">
        {children.map((item, index) => {
          return (
            <button
              key={index}
              className={
                activeIndex === index
                  ? 'container__slider__links-small container__slider__links-small-active'
                  : 'container__slider__links-small'
              }
              onClick={(e) => {
                e.preventDefault();
                setActiveIndex(index);
              }}
            ></button>
          );
        })}
      </div>
      <div className="absolute inset-y-2/4 right-0 flex flex-row gap-5 pr-10 pt-20">
        <button
          className="slider__btn-prev btn z-50"
          onClick={(e) => {
            e.preventDefault();
            slidePrev();
          }}
        >
          {'<'}
        </button>
        <button
          className="slider__btn-next btn z-50"
          onClick={(e) => {
            e.preventDefault();
            slideNext();
          }}
        >
          {'>'}
        </button>
      </div>
    </div>
  );
}
