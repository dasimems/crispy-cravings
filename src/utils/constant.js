import React from 'react'
import { AiOutlineTwitter, AiFillFacebook, AiOutlineInstagram } from "react-icons/ai"
import { ImLocation2, ImPhone } from "react-icons/im"
import { BiMailSend } from "react-icons/bi"
import { GiCook, GiKnifeFork } from "react-icons/gi"
import { BsFillCartCheckFill } from "react-icons/bs"
import { MdSupportAgent } from "react-icons/md"

import heroImg from "../asset/images/hero.png";
import team1 from "../asset/images/team1.jpg"
import team2 from "../asset/images/team2.jpg"
import Dish1 from "../asset/images/dish_1.png"
import Dish2 from "../asset/images/dish_2.png"
import Dish3 from "../asset/images/dish_3.png"
import Dish4 from "../asset/images/dish_4.png"
import Dish5 from "../asset/images/dish_5.png"
import ProfileOne from "../asset/images/profile_image.jpg"
import ProfileTwo from "../asset/images/profile_image_1.jpg"
import ProfileThree from "../asset/images/profile_image_2.jpg"



export const siteDetails = {
  whatsappNumber: "+2349036634645"
}

export const links = [
    {
      id: 1,
      text: 'Home',
      url: '/',
      bordered: false,
      background: false,
      normalLink: false
    },
    {
      id: 2,
      text: 'About Us',
      url: '/about',
      bordered: false,
      background: false,
      normalLink: false
    },
    {
      id: 3,
      text: 'Menu',
      url: '/menu',
      bordered: false,
      background: false,
      normalLink: false
    },
    {
      id: 4,
      text: 'Order Now',
      url: `https://api.whatsapp.com/send?phone=${siteDetails.whatsappNumber}`,
      bordered: true,
      background: false,
      normalLink: true
    },
  ]

  export const socials = [
    {
      id: 1,
      icon: <AiOutlineTwitter />,
      url: '/'
    },
    {
      id: 2,
      icon: <AiFillFacebook />,
      url: "/"
    },
    {
      id: 3,
      icon: <AiOutlineInstagram />,
      url: '/'
    }
  ]

  export const footerContact = [
    {
      id: 1,
      icon: <ImLocation2 />,
      url: "/",
      text: "203 Fake St. Mountain View, San Francisco, California, USA"
    },
    {
      id: 2,
      icon: <ImPhone />,
      url: "/",
      text: "+234819238441"
    },
    {
      id: 3,
      icon: <BiMailSend />,
      url: "/",
      text: "info@crispycravingscafe.com"
    }
  ]


  export const service = [
    {
      id: 1,
      title: "Master Chefs",
      content: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
      icon: <GiCook />
    },
    {
      id: 2,
      title: "Quality Food",
      content: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
      icon: <GiKnifeFork  />
    },
    {
      id: 3,
      title: "Order Online",
      content: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
      icon: <BsFillCartCheckFill />
    },
    {
      id: 4,
      title: "24/7 Services",
      content: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
      icon: <MdSupportAgent />
    },
  ]

  export const dishes = [
    {
      name: "Dish 1",
      image: Dish1
    },

    {
      name: "Dish 2",
      image: Dish2
    },

    {
      name: "Dish 3",
      image: Dish3
    },

    {
      name: "Dish 4",
      image: Dish4
    },

    {
      name: "Dish 5",
      image: Dish5
    },


  ]

  export const team = [
    {
      id: 1,
      name: "Kosiso Ekwem",
      profession: "Founder",
      image: team1
    },
    {
      id: 2,
      name: "Kosiso Ekwem",
      profession: "Chef",
      image: team2
    },
  ]

  export const productCategories = [
    {
      id: 1,
      icon: <BsFillCartCheckFill />,
      label: "cat1"
    },
    {
      id: 2,
      icon: <MdSupportAgent />,
      label: "cat2"
    },
    {
      id: 3,
      icon: <GiKnifeFork  />,
      label: "cat3"
    },
    {
      id: 4,
      icon: <GiKnifeFork  />,
      label: "cat4"
    },
    {
      id: 5,
      icon: <GiKnifeFork  />,
      label: "cat5"
    },
    {
      id: 6,
      icon: <GiKnifeFork  />,
      label: "cat6"
    },
    {
      id: 7,
      icon: <GiKnifeFork  />,
      label: "cat7"
    },
    {
      id: 8,
      icon: <GiKnifeFork  />,
      label: "cat8"
    },
    {
      id: 9,
      icon: <GiKnifeFork  />,
      label: "cat9"
    },
    {
      id: 10,
      icon: <GiKnifeFork  />,
      label: "cat10"
    },
    {
      id: 11,
      icon: <GiKnifeFork  />,
      label: "cat11"
    },
  ]

  export const products = [
    {
      id: 1,
      category: 1,
      price: "40",
      quantity: 5,
      title: "pizza",
      image: heroImg
    },
    {
      id: 2,
      category: 2,
      price: "34",
      quantity: 7,
      title: "pizza hit",
      image: team2
    },
    {
      id: 3,
      category: 3,
      price: "56",
      quantity: 7,
      title: "pizza cool",
      image: team2
    },
    {
      id: 4,
      category: 1,
      price: "40",
      quantity: 5,
      title: "pizza",
      image: heroImg
    },
    {
      id: 5,
      category: 2,
      price: "34",
      quantity: 7,
      title: "pizza hit",
      image: team2
    },
    {
      id: 6,
      category: 3,
      price: "56",
      quantity: 7,
      title: "pizza cool",
      image: team2
    },
    {
      id: 7,
      category: 1,
      price: "40",
      quantity: 5,
      title: "pizza",
      image: heroImg
    },
    {
      id: 8,
      category: 2,
      price: "34",
      quantity: 7,
      title: "pizza hit",
      image: team2
    },
    {
      id: 9,
      category: 3,
      price: "56",
      quantity: 7,
      title: "pizza cool",
      image: team2
    },
    {
      id: 10,
      category: 3,
      price: "56",
      quantity: 7,
      title: "pizza cool",
      image: team2
    },
    {
      id: 11,
      category: 3,
      price: "56",
      quantity: 7,
      title: "pizza cool",
      image: team2
    },
    {
      id: 12,
      category: 3,
      price: "56",
      quantity: 7,
      title: "pizza cool",
      image: Dish1
    },
    {
      id: 9,
      category: 3,
      price: "56",
      quantity: 7,
      title: "pizza cool",
      image: ProfileOne
    },
    {
      id: 9,
      category: 3,
      price: "56",
      quantity: 7,
      title: "pizza cool",
      image: team2
    },
    {
      id: 9,
      category: 3,
      price: "56",
      quantity: 7,
      title: "pizza cool",
      image: team2
    },
    {
      id: 9,
      category: 3,
      price: "56",
      quantity: 7,
      title: "pizza cool",
      image: team2
    },
    {
      id: 9,
      category: 3,
      price: "56",
      quantity: 7,
      title: "pizza cool",
      image: team2
    },
    {
      id: 9,
      category: 3,
      price: "56",
      quantity: 7,
      title: "pizza cool",
      image: team2
    },
    {
      id: 9,
      category: 3,
      price: "56",
      quantity: 7,
      title: "pizza cool",
      image: team2
    },
    {
      id: 9,
      category: 3,
      price: "56",
      quantity: 7,
      title: "pizza cool",
      image: team2
    },
    {
      id: 9,
      category: 3,
      price: "56",
      quantity: 7,
      title: "pizza cool",
      image: team2
    },
    
    {
      id: 9,
      category: 3,
      price: "56",
      quantity: 7,
      title: "pizza cool",
      image: team2
    },
    {
      id: 9,
      category: 3,
      price: "56",
      quantity: 7,
      title: "pizza cool",
      image: team2
    },
    {
      id: 9,
      category: 3,
      price: "56",
      quantity: 7,
      title: "pizza cool",
      image: team2
    },
    {
      id: 9,
      category: 3,
      price: "56",
      quantity: 7,
      title: "pizza cool",
      image: team2
    },
    {
      id: 9,
      category: 3,
      price: "56",
      quantity: 7,
      title: "pizza cool",
      image: team2
    },
    {
      id: 9,
      category: 3,
      price: "56",
      quantity: 7,
      title: "pizza cool",
      image: team2
    },
    {
      id: 9,
      category: 3,
      price: "56",
      quantity: 7,
      title: "pizza cool",
      image: team2
    },
    {
      id: 9,
      category: 3,
      price: "56",
      quantity: 7,
      title: "pizza cool",
      image: team2
    },
    {
      id: 9,
      category: 3,
      price: "56",
      quantity: 7,
      title: "pizza cool",
      image: team2
    },
    

    
  ]

  export const review = [
    {
      name: "Duyil Ayomid",
      image: ProfileOne,
      review: "This place is great! The atmosphere is cool and the staff is really friendly. They really do offer a great service and it can be foretold from the customers expression that they are all happy."
    },

    {
      name: "Duyil Ayomid",
      image: ProfileTwo,
      review: "This place is great! The atmosphere is cool and the staff is really friendly. They really do offer a great service and it can be foretold from the customers expression that they are all happy."
    },

    {
      name: "Duyil Ayomid",
      image: ProfileThree,
      review: "This place is great! The atmosphere is cool and the staff is really friendly. They really do offer a great service and it can be foretold from the customers expression that they are all happy."
    },

    {
      name: "Duyil Ayomid",
      image: team1,
      review: "This place is great! The atmosphere is cool and the staff is really friendly. They really do offer a great service and it can be foretold from the customers expression that they are all happy."
    },

    {
      name: "Duyil Ayomid",
      image: team2,
      review: "This place is great! The atmosphere is cool and the staff is really friendly. They really do offer a great service and it can be foretold from the customers expression that they are all happy."
    }
  ]

  export const products_url = 'https://course-api.com/react-store-products'
