import React from "react";
import CarouselYelp from "./CarouselYelp";

const testimonials = () => {
  const reviews = [
    `<span class="yelp-review" data-review-id="fPFiXeDuCTIH7vXW7NHXhw" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=tyZQyz3mv8gViHTiElA_jw" rel="nofollow noopener">Rick S.</a>'s <a href="https://www.yelp.com/biz/freedom-butchers-orland-park?hrid=fPFiXeDuCTIH7vXW7NHXhw" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/2cNaUVwRyPeCOWfcT6zs6g" rel="nofollow noopener">Freedom Butchers</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script src="https://www.yelp.com/embed/widgets.js" type="text/javascript" async></script></span>`,
    `<span class="yelp-review" data-review-id="9zLfobgWijv-4aUGMeZ3gA" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=bTWBO28aRGvX2jcmx2TB6g" rel="nofollow noopener">M. M.</a>'s <a href="https://www.yelp.com/biz/freedom-butchers-orland-park?hrid=9zLfobgWijv-4aUGMeZ3gA" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/2cNaUVwRyPeCOWfcT6zs6g" rel="nofollow noopener">Freedom Butchers</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script src="https://www.yelp.com/embed/widgets.js" type="text/javascript" async></script></span>`,
    `<span class="yelp-review" data-review-id="1JfVggtaGAawJjOJ96PYZw" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=ZcvArx5srF63Qd6GJ4qvrA" rel="nofollow noopener">Kevin C.</a>'s <a href="https://www.yelp.com/biz/freedom-butchers-orland-park?hrid=1JfVggtaGAawJjOJ96PYZw" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/2cNaUVwRyPeCOWfcT6zs6g" rel="nofollow noopener">Freedom Butchers</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script src="https://www.yelp.com/embed/widgets.js" type="text/javascript" async></script></span>`,
    `<span class="yelp-review" data-review-id="eGQjhY0pHtOONVymAhdbWQ" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=3mt-BFtm_kcN2ED0KWr3BQ" rel="nofollow noopener">Jim K.</a>'s <a href="https://www.yelp.com/biz/freedom-butchers-orland-park?hrid=eGQjhY0pHtOONVymAhdbWQ" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/2cNaUVwRyPeCOWfcT6zs6g" rel="nofollow noopener">Freedom Butchers</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script src="https://www.yelp.com/embed/widgets.js" type="text/javascript" async></script></span>`,
    `<span class="yelp-review" data-review-id="LP3DzWG7TPlabM1wjghseQ" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=abABb_NL9dtsFYKvcfSvCw" rel="nofollow noopener">J M.</a>'s <a href="https://www.yelp.com/biz/freedom-butchers-orland-park?hrid=LP3DzWG7TPlabM1wjghseQ" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/2cNaUVwRyPeCOWfcT6zs6g" rel="nofollow noopener">Freedom Butchers</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script src="https://www.yelp.com/embed/widgets.js" type="text/javascript" async></script></span>`,
    `<span class="yelp-review" data-review-id="w-dP200IhjLN_64N4ZIrWA" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=v3v4Hk2eXNlhxi92Fv_vBA" rel="nofollow noopener">Beth A.</a>'s <a href="https://www.yelp.com/biz/freedom-butchers-orland-park?hrid=w-dP200IhjLN_64N4ZIrWA" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/2cNaUVwRyPeCOWfcT6zs6g" rel="nofollow noopener">Freedom Butchers</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script src="https://www.yelp.com/embed/widgets.js" type="text/javascript" async></script></span>`,
    `<span class="yelp-review" data-review-id="Pib2RYsdVePorHdsP7_lOA" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=w52jGK2HhFlvLsMEjOsstQ" rel="nofollow noopener">Chris B.</a>'s <a href="https://www.yelp.com/biz/freedom-butchers-orland-park?hrid=Pib2RYsdVePorHdsP7_lOA" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/2cNaUVwRyPeCOWfcT6zs6g" rel="nofollow noopener">Freedom Butchers</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script src="https://www.yelp.com/embed/widgets.js" type="text/javascript" async></script></span>`,
    `<span class="yelp-review" data-review-id="XcietbIzdf8NNdDZ_n_MAQ" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=Q0inKKpLI-GcKKzdxoqQtg" rel="nofollow noopener">Gregory S.</a>'s <a href="https://www.yelp.com/biz/freedom-butchers-orland-park?hrid=XcietbIzdf8NNdDZ_n_MAQ" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/2cNaUVwRyPeCOWfcT6zs6g" rel="nofollow noopener">Freedom Butchers</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script src="https://www.yelp.com/embed/widgets.js" type="text/javascript" async></script></span>`,
    `<span class="yelp-review" data-review-id="x1sqGOULkV9daVQ6UFG-Cw" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=Rx0mJNLF04LAqEwSPmuvRA" rel="nofollow noopener">Phil H.</a>'s <a href="https://www.yelp.com/biz/freedom-butchers-orland-park?hrid=x1sqGOULkV9daVQ6UFG-Cw" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/2cNaUVwRyPeCOWfcT6zs6g" rel="nofollow noopener">Freedom Butchers</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script src="https://www.yelp.com/embed/widgets.js" type="text/javascript" async></script></span>`,
    `<span class="yelp-review" data-review-id="iA8d7rpjvDaJwg5qotz-jw" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=m9tYuXCPvxsIhKpzNBsWVA" rel="nofollow noopener">Kyle G.</a>'s <a href="https://www.yelp.com/biz/freedom-butchers-orland-park?hrid=iA8d7rpjvDaJwg5qotz-jw" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/2cNaUVwRyPeCOWfcT6zs6g" rel="nofollow noopener">Freedom Butchers</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script src="https://www.yelp.com/embed/widgets.js" type="text/javascript" async></script></span>`,
    `<span class="yelp-review" data-review-id="9Av9PbFoZkUVNCvCAHfWjw" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=HG-3l_2mj53CuYihdh57cA" rel="nofollow noopener">Ray K.</a>'s <a href="https://www.yelp.com/biz/freedom-butchers-orland-park?hrid=9Av9PbFoZkUVNCvCAHfWjw" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/2cNaUVwRyPeCOWfcT6zs6g" rel="nofollow noopener">Freedom Butchers</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script src="https://www.yelp.com/embed/widgets.js" type="text/javascript" async></script></span>`,
    `<span class="yelp-review" data-review-id="HyiuYUlflwvtghHcJkYDPQ" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=egIszxwZmF3BtwlXldXDnw" rel="nofollow noopener">Darrell O.</a>'s <a href="https://www.yelp.com/biz/freedom-butchers-orland-park?hrid=HyiuYUlflwvtghHcJkYDPQ" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/2cNaUVwRyPeCOWfcT6zs6g" rel="nofollow noopener">Freedom Butchers</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script src="https://www.yelp.com/embed/widgets.js" type="text/javascript" async></script></span>`,
    `<span class="yelp-review" data-review-id="zmEF3TDU4tZvrj2eBrhefA" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=oAXBq2iW8QpMAL0ThnguLw" rel="nofollow noopener">Aaron A.</a>'s <a href="https://www.yelp.com/biz/freedom-butchers-orland-park?hrid=zmEF3TDU4tZvrj2eBrhefA" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/2cNaUVwRyPeCOWfcT6zs6g" rel="nofollow noopener">Freedom Butchers</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script src="https://www.yelp.com/embed/widgets.js" type="text/javascript" async></script></span>`,
    `<span class="yelp-review" data-review-id="JwAUuTaaqmJwdPp9w9TupQ" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=hluIZ-LiZFffPYIshHZcBg" rel="nofollow noopener">Hockey P.</a>'s <a href="https://www.yelp.com/biz/freedom-butchers-orland-park?hrid=JwAUuTaaqmJwdPp9w9TupQ" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/2cNaUVwRyPeCOWfcT6zs6g" rel="nofollow noopener">Freedom Butchers</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script src="https://www.yelp.com/embed/widgets.js" type="text/javascript" async></script></span>`,
    `<span class="yelp-review" data-review-id="QglGVvfZjedXSKAd8FkNsw" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=dIfprHDN5L6ZaEPe7X_vrQ" rel="nofollow noopener">Chris P.</a>'s <a href="https://www.yelp.com/biz/freedom-butchers-orland-park?hrid=QglGVvfZjedXSKAd8FkNsw" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/2cNaUVwRyPeCOWfcT6zs6g" rel="nofollow noopener">Freedom Butchers</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script src="https://www.yelp.com/embed/widgets.js" type="text/javascript" async></script></span>`,
    `<span class="yelp-review" data-review-id="CLDoBwtjGNpopX--UCZ-cA" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=oED0Fmez_pDC7o-Um9W8ng" rel="nofollow noopener">Ron P.</a>'s <a href="https://www.yelp.com/biz/freedom-butchers-orland-park?hrid=CLDoBwtjGNpopX--UCZ-cA" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/2cNaUVwRyPeCOWfcT6zs6g" rel="nofollow noopener">Freedom Butchers</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script src="https://www.yelp.com/embed/widgets.js" type="text/javascript" async></script></span>`,
  ];

  return (
    <section className="w-full mx-auto p-4 sm:p-8 pb-8 md:pb-16">
      <div className="w-full">
        <CarouselYelp reviews={reviews} />
      </div>
    </section>
  );
};

export default testimonials;
