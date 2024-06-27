import React, { useRef, useEffect } from 'react';
import {
  CARD_TITLE_COMMON_CONFIG,
  FESTIVAL_INFO_TAB_CONFIG,
  SHOW_HIDE_BUTTON_ELLIPSIS,
  VIEW_FESTIVAL_CONFIG,
} from "@/constants";
import { Avatar, Button, Card, Flex, Typography } from "../common";
import { getImageURLWithS3Link } from "@/helper";
import Photos from "./Photos";
import ContactAndVenue from "./ContactAndVenue";
import Review from "./Review";

function getEllipsisConfig() {
  return {
    rows: 5,
    expandable: "collapsible",
    symbol: (expanded) => (
      <Button {...SHOW_HIDE_BUTTON_ELLIPSIS({ expanded })} />
    ),
  };
}

function Organizers({ organizers }) {
  const { ORGANIZER, ORGANIZER_NAME, ORGANIZER_DESIGNATION } =
    FESTIVAL_INFO_TAB_CONFIG;
  return (
    <>
      <Card title={<Typography {...ORGANIZER} />}>
        <Flex gap={24}>
          {organizers &&
            organizers?.map(({ designation, name }) => {
              return (
                <Flex vertical key={`${name}-${designation}`}>
                  <Typography text={name} {...ORGANIZER_NAME} />
                  <Typography text={designation} {...ORGANIZER_DESIGNATION} />
                </Flex>
              );
            })}
        </Flex>
      </Card>
    </>
  );
}

function About({ description, photos, setActiveKey }) {
  const { COMMON_FESTIVAL_INFO } = FESTIVAL_INFO_TAB_CONFIG;
  const { TAB_KEYS } = VIEW_FESTIVAL_CONFIG;

  return (
    <>
      <Card
        loading={!description}
        title={<Typography text={"About"} {...CARD_TITLE_COMMON_CONFIG} />}
      >
        <Flex
          className={"mb-4 cursor-pointer"}
          gap={8}
          wrap={"wrap"}
          onClick={() => setActiveKey(TAB_KEYS.PHOTOS)}
        >
          {photos?.map(({ url, title }) => (
            <Avatar
              src={getImageURLWithS3Link(url)}
              size={150}
              alt={title}
              shape={"square"}
              className="app-border-radius"
              key={`${url}_${title}`}
            />
          ))}
        </Flex>
        <Typography
          text={description}
          {...COMMON_FESTIVAL_INFO}
          ellipsis={{ ...getEllipsisConfig() }}
        />
      </Card>
    </>
  );
}

function FestivalInfo(props) {
  const { FESTIVAL_INFO_MAPPING, COMMON_FESTIVAL_INFO } = FESTIVAL_INFO_TAB_CONFIG;
  const { TAB_KEYS } = VIEW_FESTIVAL_CONFIG;
  const aboutRef = useRef(null);
  const photosRef = useRef(null);
  const contactAndVenueRef = useRef(null);
  const reviewRef = useRef(null);

  useEffect(() => {
    if (props.activeKey === TAB_KEYS.FESTIVAL) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (props.activeKey === TAB_KEYS.PHOTOS) {
      photosRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (props.activeKey === TAB_KEYS.CONTACT_AND_VENUE) {
      contactAndVenueRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (props.activeKey === TAB_KEYS.REVIEW) {
      reviewRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [props.activeKey, TAB_KEYS]);

  return (
    <Flex vertical gap={24}>
      <div ref={aboutRef}>
        <About {...props} />
      </div>
      {FESTIVAL_INFO_MAPPING.map(({ text, dbMapping }, idx) => {
        return (
          <Card
            loading={!props[dbMapping]}
            title={<Typography text={text} {...CARD_TITLE_COMMON_CONFIG} />}
            key={`${text}-${idx}`}
          >
            <Typography
              text={props[dbMapping]}
              {...COMMON_FESTIVAL_INFO}
              ellipsis={{ ...getEllipsisConfig() }}
            />
          </Card>
        );
      })}
      <div ref={photosRef}>
        <Photos {...props} />
      </div>
      <div ref={contactAndVenueRef}>
        <ContactAndVenue {...props} />
      </div>
      <div ref={reviewRef}>
        <Review {...props} />
      </div>
      <Organizers {...props} />
    </Flex>
  );
}

export default FestivalInfo;
