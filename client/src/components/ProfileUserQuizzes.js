import { useQuery } from "@apollo/client";
import { Center, Grid, Image, Skeleton, Text } from "@chakra-ui/react";
import React from "react";
import empty from "../assets/svg/empty.svg";
import { GET_OTHER_QUIZZES } from "../utils/graphql";
import Card from "./Card";
import { trackWindowScroll } from "react-lazy-load-image-component";

const ProfileUserQuizzes = ({ userId, scrollPosition }) => {
  const {
    loading,
    error,
    data: { getOthersQuizzes: data } = {},
  } = useQuery(GET_OTHER_QUIZZES, {
    variables: {
      userId,
    },
  });
  if (loading) {
    return (
      <Grid
        w="full"
        mt={10}
        templateColumns="repeat(auto-fit, minmax(320px, 1fr))"
        gap={4}
        justifyItems="center"
      >
        <Skeleton minH="360px" borderRadius="8px" boxShadow="md" />
        <Skeleton minH="360px" borderRadius="8px" boxShadow="md" />
        <Skeleton minH="360px" borderRadius="8px" boxShadow="md" />
        <Skeleton minH="360px" borderRadius="8px" boxShadow="md" />
      </Grid>
    );
  }
  if (error) return <p>Error</p>;
  return (
    <>
      <Grid
        w="full"
        mt={10}
        templateColumns="repeat(auto-fit, minmax(320px, 1fr))"
        gap={4}
        justifyItems="center"
      >
        {data.map((q) => {
          return (
            <Card key={q.id} quizData={q} scrollPosition={scrollPosition} />
          );
        })}
      </Grid>
      {data.length === 0 && (
        <Center w="full" h="full" py="50px" flexDirection="column">
          <Center mb="10px" w="full">
            <Image
              boxSize={{ base: "50%", md: "60%" }}
              src={empty}
              objectFit="cover"
            />
          </Center>

          <Text
            fontFamily="inter"
            fontWeight="800"
            fontSize="48px"
            color="gray.700"
          >
            No Quiz Data
          </Text>
        </Center>
      )}
    </>
  );
};

export default trackWindowScroll(ProfileUserQuizzes);
