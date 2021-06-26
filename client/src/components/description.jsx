import { React, useEffect, useState } from "react";

const Description = (props) => {
  const data = {
    ISTP: {
      description:
        "Virtuosos love to explore with their hands and eyes, touching and examining the world around them with cool rationalism and great curiosity. People with this personality type are natural creators, moving from project to project building the useful and the superfluous just for the fun of it",
      link: "https://www.16personalities.com/istp-personality",
    },
    ENFJ: {
      description:
        "Protagonists are natural-born leaders, full of passion and charisma. Forming around two percent of the population, they are oftentimes our politicians, our coaches and our teachers, reaching out and inspiring others to achieve and to do good in the world. ",
      link: "https://www.16personalities.com/enfj-personality",
    },
    ENTJ: {
      description:
        "Commanders are natural-born leaders. People with this personality type embody the gifts of charisma and confidence, and project authority in a way that draws crowds together behind a common goal. However, Commanders are also characterized by an often ruthless level of rationality, using their drive, determination and sharp minds to achieve whatever end they’ve set for themselves. ",
      link: "https://www.16personalities.com/entj-personality",
    },
    INTP: {
      description:
        "Logicians pride themselves on their unique perspectives and vigorous intellect. They can’t help but puzzle over the mysteries of the universe – which may explain why some of the most influential philosophers and scientists of all time have been Logicians. This personality type is fairly rare, but with their creativity and inventiveness, Logicians aren’t afraid to stand out from the crowd.",
      link: "https://www.16personalities.com/intp-personality",
    },
    INFP: {
      description:
        ". Creative and imaginative, they happily lose themselves in daydreams, inventing all sorts of stories and conversations in their minds. These personalities are known for their sensitivity – Mediators can have profound emotional responses to music, art, nature, and the people around them.",
      link: "https://www.16personalities.com/infp-personality",
    },
    ISFP: {
      description:
        "Adventurer personalities are true artists, but not necessarily in the typical sense where they’re out painting happy little trees. Often enough though, they are perfectly capable of this. Rather, it’s that they use aesthetics, design and even their choices and actions to push the limits of social convention.",
      link: "https://www.16personalities.com/isfp-personality",
    },
    ESFP: {
      description:
        "If anyone is to be found spontaneously breaking into song and dance, it is the Entertainer personality type. Entertainers get caught up in the excitement of the moment, and want everyone else to feel that way, too. No other personality type is as generous with their time and energy as Entertainers when it comes to encouraging others.",
      link: "https://www.16personalities.com/esfp-personality",
    },
    INFJ: {
      description:
        "Advocates’ unique combination of personality traits makes them complex and quite versatile. For example, Advocates can speak with great passion and conviction, especially when standing up for their ideals. At other times, however, they may choose to be soft-spoken and understated, preferring to keep the peace rather than challenge others.",
      link: "https://www.16personalities.com/infj-personality",
    },
    ENFP: {
      description:
        "The Campaigner personality is a true free spirit. They are often the life of the party, but unlike types in the Explorer Role group, Campaigners are less interested in the sheer excitement and pleasure of the moment than they are in enjoying the social and emotional connections they make with others.",
      link: "https://www.16personalities.com/enfp-personality",
    },
    INTJ: {
      description:
        "These personalities can be both the boldest of dreamers and the bitterest of pessimists. Architects believe that, through willpower and intelligence, they can achieve even the most challenging of goals. But they may be cynical about human nature more generally, assuming that most people are lazy, unimaginative, or simply doomed to mediocrity.",
      link: "https://www.16personalities.com/intj-personality",
    },
    ESTJ: {
      description:
        "Executives are representatives of tradition and order, utilizing their understanding of what is right, wrong and socially acceptable to bring families and communities together. Embracing the values of honesty, dedication and dignity, people with the Executive personality type are valued for their clear advice and guidance.",
      link: "https://www.16personalities.com/estj-personality",
    },
    ESTP: {
      description:
        "Entrepreneurs always have an impact on their immediate surroundings – the best way to spot them at a party is to look for the whirling eddy of people flitting about them as they move from group to group. Laughing and entertaining with a blunt and earthy humor.",
      link: "https://www.16personalities.com/estp-personality",
    },
    ISFJ: {
      description:
        "The Defender personality type is quite unique, as many of their qualities defy the definition of their individual traits. Though sensitive, Defenders have excellent analytical abilities; though reserved, they have well-developed people skills and robust social relationships; and though they are generally a conservative type.",
      link: "https://www.16personalities.com/isfj-personality",
    },
    ISTJ: {
      description:
        "The Defender personality type is quite unique, as many of their qualities defy the definition of their individual traits. Though sensitive, Defenders have excellent analytical abilities; though reserved, they have well-developed people skills and robust social relationships; and though they are generally a conservative type.",
      link: "https://www.16personalities.com/isfj-personality",
    },
    ENTP: {
      description: "Debaters are the ultimate devil’s advocate, thriving on the process of shredding arguments and beliefs and letting the ribbons drift in the wind for all to see. They don’t always do this because they are trying to achieve some deeper purpose or strategic goal, though. Sometimes it’s for the simple reason that it’s fun.",
      link: "https://www.16personalities.com/entp-personality"
    }
  };

  return (
    <div className="row">
      <div id="text-description">
        <h1>Personality Type: {props.personality}</h1>
        <p id="description-text">
          {data[props.personality].description}
        </p>
        <p id="source">
          Source:
          <a href={data[props.personality].link} id="link">
            {data[props.personality].link}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Description;
