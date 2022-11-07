import React from 'react'
import { AiOutlineTwitter, AiFillFacebook, AiOutlineInstagram } from "react-icons/ai"
import { ImLocation2, ImPhone } from "react-icons/im"
import { BiMailSend } from "react-icons/bi"
import { GiCook, GiKnifeFork } from "react-icons/gi"
import { BsFillCartCheckFill } from "react-icons/bs"
import { MdSupportAgent } from "react-icons/md"

import heroImg from "../asset/hero.png";
import team1 from "../asset/team1.jpg"
import team2 from "../asset/team2.jpg"

export const links = [
    {
      id: 1,
      text: 'home',
      url: '/',
    },
    {
      id: 2,
      text: 'about',
      url: '/about',
    },
    {
      id: 3,
      text: 'menu',
      url: '/menu',
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
      text: "+234 819238441"
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
    }
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
    }
  ]

  export const products_url = 'https://course-api.com/react-store-products'
