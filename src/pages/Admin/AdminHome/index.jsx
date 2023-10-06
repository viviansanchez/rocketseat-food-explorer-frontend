import { useEffect, useState } from "react"

import { api } from "../../../services/api"

import { Container, Main } from "./styles"

import { Header } from "../../../components/Header"
import { Banner } from "../../../components/Banner"
import { Carousel } from "../../../components/Carousel"
import { Footer } from "../../../components/Footer"

export function AdminHome() {
  const [search, setSearch] = useState("")
  const [dishes, setDishes] = useState([])
  const [meals, setMeals] = useState([])
  const [drinks, setDrinks] = useState([])
  const [desserts, setDesserts] = useState([])

  useEffect(() => {
    async function fetchDishes(){
      // what I did that results in dishes not being displayed on page on first load:
      // const response = await api.get(`/dishes?search=${search}`)
      // setDishes(response.data)

      // setMeals(dishes.filter((dish) => dish.category === "meal"))
      // setDesserts(dishes.filter(dish => dish.category === "dessert"))
      // setDrinks(dishes.filter(dish => dish.category === "drink"))

      // one way I found of resolving this was in the useEffect dependencies, add search AND dishes. This does work but it makes constant requests, like in a loop forever lmao so its not a really good solution

      //what was suggested to me in correction and actually works correctly is as follows (and also removing dishes from useEffect dependency):
      const response = await api.get(`/dishes`, { params: { search } })
      setDishes(response.data)

      setMeals(response.data.filter((dish) => dish.category === "meal"))
      setDesserts(response.data.filter(dish => dish.category === "dessert"))
      setDrinks(response.data.filter(dish => dish.category === "drink"))
    }

    fetchDishes()
  }, [search])

  return(
    <Container>
      <Header 
        isAdmin 
        onChange={e => setSearch(e.target.value)}
      />
      
      <Main>
        <Banner className="banner" />

        <Carousel 
          title="Refeições" 
          isAdmin 
          dishes={meals}
        />

        <Carousel 
          className="margin-top" 
          title="Sobremesas" 
          isAdmin
          
          dishes={desserts}
        />

        <Carousel 
          className="margin-top" 
          title="Bebidas" 
          isAdmin
          
          dishes={drinks}
        />

      </Main>
      <Footer />
    </Container>
  )
}