import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react'


import React from 'react'

const Accoourdion = () => {
  return (
    <Accordion defaultIndex={[0]} w={"80%"} margin="auto" mt = "5" mb = "5" allowMultiple >
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex='1' textAlign='left'  >
          <Heading size = "sm">More Details about Health, Nutrition & Body Building Supplements</Heading>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
     <Heading size ="sm" >
     HealthKart Health, Nutritional & Bodybuilding Supplements Destination
  
     
     </Heading>
     <Text mt = "1" >
     Today HealthKart has become the best in its game because of:
     </Text>
     <UnorderedList mt ="3" >
      <ListItem>    Great online appearance  </ListItem>
      <ListItem>  Informational content    </ListItem>
      <ListItem>  Loyalty programs for its customers to experience hassle-free and pocket-friendly shopping experiences.    </ListItem>
      <ListItem>  Better services and authentic products    </ListItem>
      <ListItem>   Overall, HealthKart focuses on covering every single requirement related to health and fitness.   </ListItem>
     </UnorderedList>
   <Box border ="0.1px solid gray" mt ="3" mb="3" />
     <Text>
     What Makes HealthKart Special?
     </Text>
  
  <Text>
  HealthKart is dedicated to providing everything that you will need in your journey towards a fitter you. From whey protein, vitamin c tablet, fat burners, mass gainers, weight gainers to herbal supplements like shatavari churna, to other bodybuilding supplements and nutritional supplements that you need, HealthKart is your one stop shop. There are several features that set HealthKart apart, such as:
  </Text>
  
  <UnorderedList mt = "3" >
      <ListItem>   The widest range of top bodybuilding supplements. </ListItem>
      <ListItem> Learn about the products that you are purchasing in detail..    </ListItem>
      <ListItem>  Better services and authentic products    </ListItem>
      <ListItem>  Benefit from exclusive discounts and offers.  </ListItem>
      <ListItem>Buy only authentic products sourced directly from the manufacturers. </ListItem>
      <ListItem> Highest safety standards.  </ListItem>
      <ListItem>   Easy return and delivery policies.  </ListItem>
     </UnorderedList>
  
     <Heading size ="sm" mt = "3" mb ="3" >
     House Of HealthKart: Affordable Health Supplements Are At A Click Away
  
     </Heading>
  
     <Text>For all fitness enthusiasts, the right nutrition is of prime importance. Ensuring that your body gets the fuel it needs to keep up with your rigorous fitness regime is not easy, given the time constraints and busy schedUnorderedListes. HealthKart resolves this dilemma by bringing to you premium high-performance top nutritional products and online health consUnorderedListtation under one portal. This allows you to compare, choose and purchase the right products for your requirements and to match your training schedule perfectly. HealthKart is your ideal platform for all nutrition, health and fitness products. We serve millions of customers through our dedicated online and offline channels to ensure that they are able to reach their fitness goals, whether they are general or specific.</Text>
  
      </AccordionPanel>
    </AccordionItem>
  
   
  </Accordion>
  )
}

export default Accoourdion
