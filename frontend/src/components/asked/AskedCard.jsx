import React, { useState } from 'react'
import { AskedData } from './AskedData';

export default function AskedCard({card}) {
    const [icon , setIcon] = useState("fa-plus");
    function changeIcon(){
      icon === "fa-plus" ? setIcon("fa-minus") : setIcon("fa-plus")
    }
  return (
    <div className="askedRow m-2" key={card.id}>
          <div className="askedRowTop d-flex justify-content-between">
            <h5 className="fw-semiold">{card.title}</h5>
            <i
              className={`fa-solid ${icon}`}
              onClick={changeIcon}
              data-bs-toggle="collapse"
              data-bs-target={`#faq${card.id}`}
              aria-expanded="false"
              aria-controls={`faq${card.id}`}
            ></i>
          </div>
          <div
            class="mt-2 collapse"
            id={`faq${card.id}`}
          >
            <p class="mb-0 text-black-50">
              Yes, you can try us for free for 30 days. If you want, we’ll
              provide you with a free, personalized 30-minute onboarding call to
              get you up and running as soon as possible.
            </p>
          </div>
        </div>
  )
}
