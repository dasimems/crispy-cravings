import React from 'react'
import { AiOutlineTwitter, AiFillFacebook, AiOutlineInstagram } from "react-icons/ai"
import { ImLocation2, ImPhone } from "react-icons/im"
import { BiMailSend } from "react-icons/bi"
import { GiCook, GiKnifeFork } from "react-icons/gi"
import { BsFillCartCheckFill } from "react-icons/bs"
import { MdSupportAgent } from "react-icons/md"
 
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
      text: 'products',
      url: '/products',
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
    {
      id: 3,
      name: "Kosiso Ekwem",
      profession: "Manager",
      image: team1
    },
    {
      id: 4,
      name: "Kosiso Ekwem",
      profession: "Exec.",
      image: team2
    },
  ]
  export const products_url = 'https://course-api.com/react-store-products'
