import { useState } from "react";
import { useBreakpoint, useTheme } from "@/hooks";
import {
  Column,
  Row,
  Tabs,
  Typography,
  Flex,
  When,
  Button,
  Avatar,
} from "../common";
import ContactAndVenue from "./ContactAndVenue";
import FestivalInfo from "./FestivalInfo";
import LeftSection from "./LeftSection";
import Photos from "./Photos";
import Review from "./Review";
import { constructClassName, getImageURLWithS3Link } from "@/helper";
import {
  VIEW_FESTIVAL_CONFIG,
  TYPOGRAPHY,
  CREATE_FESTIVAL_URL,
  TAB_TITLE_COMMON_CONFIG,
  TYPOGRAPHY_COLOR,
  MESSAGE_URL,
} from "@/constants";
import ProjectSelectionModal from "./ProjectSelectionModal";
import { useRouter } from "next/router";
import TopNavbar from "./TopNavbar";
import colorStyles from "../../theme/_colour.module.scss";
function RenderTabPane({ type, props, setActiveKey }) {
  const { TAB_KEYS } = VIEW_FESTIVAL_CONFIG;
  const { colorBorder } = useTheme();

  return (
    <Row
      className={"p-8 !m-0"}
      style={{ background: colorBorder }}
      gutter={[24, 24]}
    >
      <Column
        xs={{ span: 24 }}
        sm={{ span: 24 }}
        md={{ span: 24 }}
        lg={{ span: 8 }}
        xl={{ span: 8 }}
        xxl={{ span: 8 }}
      >
        <LeftSection {...props} />
      </Column>
      <Column
        xs={{ span: 24 }}
        sm={{ span: 24 }}
        md={{ span: 24 }}
        lg={{ span: 16 }}
        xl={{ span: 16 }}
        xxl={{ span: 16 }}
        className="festival-info-container h-[550px] overflow-y-auto" style={{ 
          scrollbarWidth: 'none', /* Firefox */
          msOverflowStyle: 'none', /* Internet Explorer */
          '&::webkitScrollbar': {
              display: 'none' /* WebKit (Chrome, Safari, etc.) */
          }
      }}
      
      >
        <When condition={type === TAB_KEYS.FESTIVAL}>
          <FestivalInfo {...props} setActiveKey={setActiveKey } activeKey={TAB_KEYS.FESTIVAL} />
        </When>
        <When condition={type === TAB_KEYS.PHOTOS}>
          <FestivalInfo {...props} setActiveKey={setActiveKey} activeKey={TAB_KEYS.PHOTOS} />
        </When>
        <When condition={type === TAB_KEYS.CONTACT_AND_VENUE}>
          <FestivalInfo {...props} setActiveKey={setActiveKey} activeKey={TAB_KEYS.CONTACT_AND_VENUE} />
        </When>
        <When condition={type === TAB_KEYS.REVIEW}>
          <FestivalInfo {...props} setActiveKey={setActiveKey} activeKey={TAB_KEYS.REVIEW} />
        </When>
      </Column>
    </Row>
  );
}



function FestivalAction(props) {
  const { isOwner, entriesActive, setShowModal } = props;
  const { isLarge, isExtraLarge, isDoubleLarge } = useBreakpoint();
  const router = useRouter();
  const isLargeScreen = isLarge || isExtraLarge || isDoubleLarge;

  function handleEditClick() {
    router.push(CREATE_FESTIVAL_URL);
  }

  function handleMessageClick() {
    if (!loggedIn) {
      setShowModal(true);
    } else {
      router.push(MESSAGE_URL);
    }
  }

  const loggedIn = true;

  return (
    <Flex
      gap={8}
      wrap={!isLargeScreen ? "wrap" : ""}
      justify={!isLargeScreen ? "center" : ""}
    >
      <Button
        text={"Message"}
        formItemProps={{ className: "w-full" }}
        buttonProps={{ type: "default", block: !isLargeScreen }}
        onClick={handleMessageClick}
      />
      <When condition={!isOwner}>
        <Button
          formItemProps={{ className: "w-full" }}
          buttonProps={{
            block: !isLargeScreen,
            disabled: !entriesActive,
          }}
          text={entriesActive ? "Submit Film" : "Entries closed"}
          onClick={() => setShowModal(true)}
        />
      </When>
      <When condition={isOwner}>
        <Button
          text={"Edit Festival"}
          formItemProps={{ className: "w-full" }}
          buttonProps={{ block: !isLargeScreen }}
          onClick={handleEditClick}
        />
      </When>
    </Flex>
  );
}

function ViewFestival(props) {
  const [showModal, setShowModal] = useState(false);
  const { TAB_KEYS } = VIEW_FESTIVAL_CONFIG;
  const { isLarge, isExtraLarge, isDoubleLarge } = useBreakpoint();
  const [activeKey, setActiveKey] = useState(TAB_KEYS.FESTIVAL);
  const { colorBgLayout } = useTheme();
  const ratingLabel = props?.rating ? `Review ${props.rating}` : "Review";
  const isLargeScreen = isLarge || isExtraLarge || isDoubleLarge;

  const tabsItem = [
    {
      label: "Festival",
      key: TAB_KEYS.FESTIVAL,
    },
    {
      label: "Photos",
      key: TAB_KEYS.PHOTOS,
    },
    {
      label: "Contact & Venue",
      key: TAB_KEYS.CONTACT_AND_VENUE,
    },
    {
      label: ratingLabel,
      key: TAB_KEYS.REVIEW,
    },
  ];

  const tabsItemToBeRendered = tabsItem?.map(({ label, key, ...rest }) => {
    return {
      ...rest,
      label: (
        <Typography
          text={label}
          className={"pt-2"}
          {...TAB_TITLE_COMMON_CONFIG({ isSelected: key === activeKey })}
        />
      ),
      key,
      children: (
        <RenderTabPane type={key} props={props} setActiveKey={setActiveKey} />
      ),
    };
  });

  const renderTabBar = (tabProps, DefaultTabBar) => (
    <Flex
      wrap={"wrap"}
      align={"center"}
      className={constructClassName([
        isLargeScreen ? "pl-80" : "pl-8 pb-4",
        "pr-11",
      ])}
      gap={16}
      justify={isLargeScreen ? "space-between" : "center"}
    >
      <DefaultTabBar
        {...tabProps}
        style={{ background: colorBgLayout }}
        className={constructClassName([isLargeScreen ? "" : "w-full px-1"])}
      />
      <FestivalAction {...props} setShowModal={setShowModal} />
    </Flex>
  );

  return (
    <div className="view-festival-page">
      {/* Navigation Bar */}
      <When condition={props.name}>
        <TopNavbar festivalData={props} setShowModal={setShowModal} />
      </When>
      <Avatar
        src={getImageURLWithS3Link(props?.coverUrl)}
        shape={"square"}
        className={"w-full"}
        style={{ height: "320px" }}
      />
      <div className="dummy-patch" />
      <Flex
        gap={24}
        align={"flex-end"}
        className={constructClassName([
          isLargeScreen ? "top-40 pl-11" : "top-60",
          "festival-name-and-logo absolute w-full",
        ])}
        justify={isLargeScreen ? "flex-start" : "center"}
        wrap={"wrap"}
      >
        <Avatar
          src={getImageURLWithS3Link(props?.logoUrl)}
          size={{
            xs: 150,
            sm: 150,
            md: 150,
            lg: 250,
            xl: 250,
            xxl: 250,
          }}
          className={"z-10"}
          shape={"square"}
          style={{ border: `4px solid ${colorStyles["white"]}` }}
        />
        <When condition={isLargeScreen}>
          <div className={"mb-12"}>
            <Typography
              text={props?.name}
              type={TYPOGRAPHY.TITLE}
              fontColor={TYPOGRAPHY_COLOR.WHITE_NT}
            />
          </div>
        </When>
      </Flex>
      <When condition={!isLargeScreen}>
        <Typography
          text={props?.name}
          type={TYPOGRAPHY.TITLE}
          fontColor={TYPOGRAPHY_COLOR.BLACK}
          className={"mt-4 text-center"}
        />
      </When>
      <Flex>
        <Tabs
          renderTabBar={renderTabBar}
          items={tabsItemToBeRendered}
          className={constructClassName(["festival-main-tabs w-full"])}
          onChange={(key) => setActiveKey(key)}
          activeKey={activeKey}
        />
      </Flex>
      <When condition={!props?.isOwner || props?.entriesActive}>
        <ProjectSelectionModal
          showModal={showModal}
          title={props?.name}
          festivalId={props?.id}
          onClose={() => setShowModal(false)}
        />
      </When>
    </div>
  );
}

export default ViewFestival;

import React, { useRef, useEffect } from "react";
import {
  CARD_TITLE_COMMON_CONFIG,
  FESTIVAL_INFO_TAB_CONFIG,
  VIEW_FESTIVAL_CONFIG,
} from "@/constants";
import { Avatar, Card, Flex, Typography } from "../common";
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
    <Card title={<Typography {...ORGANIZER} />}>
      <Flex gap={24}>
        {organizers &&
          organizers.map(({ designation, name }) => (
            <Flex vertical key={`${name}-${designation}`}>
              <Typography text={name} {...ORGANIZER_NAME} />
              <Typography text={designation} {...ORGANIZER_DESIGNATION} />
            </Flex>
          ))}
      </Flex>
    </Card>
  );
}

function About({ description, photos, setActiveKey }) {
  const { COMMON_FESTIVAL_INFO } = FESTIVAL_INFO_TAB_CONFIG;
  const { TAB_KEYS } = VIEW_FESTIVAL_CONFIG;

  return (
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
  );
}

function FestivalInfo(props) {
  const { FESTIVAL_INFO_MAPPING, COMMON_FESTIVAL_INFO } =
    FESTIVAL_INFO_TAB_CONFIG;
  const { TAB_KEYS } = VIEW_FESTIVAL_CONFIG;
  const aboutRef = useRef(null);
  const photosRef = useRef(null);
  const contactAndVenueRef = useRef(null);
  const reviewRef = useRef(null);

  // Helper function to scroll to a section and ensure it appears at the top of the viewport
  const scrollToRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (props.activeKey === TAB_KEYS.FESTIVAL) {
      scrollToRef(aboutRef);
    } else if (props.activeKey === TAB_KEYS.PHOTOS) {
      scrollToRef(photosRef);
    } else if (props.activeKey === TAB_KEYS.CONTACT_AND_VENUE) {
      scrollToRef(contactAndVenueRef);
    } else if (props.activeKey === TAB_KEYS.REVIEW) {
      scrollToRef(reviewRef);
    }
  }, [props.activeKey, TAB_KEYS]);

  return (
    <Flex vertical gap={24}>
      <div ref={aboutRef}>
        <About {...props} />
      </div>
      {FESTIVAL_INFO_MAPPING.map(({ text, dbMapping }, idx) => (
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
      ))}
      <div ref={photosRef}>
        <Photos {...props} />
      </div>
      <div ref={contactAndVenueRef}>
        <ContactAndVenue {...props} />
      </div>
      <div ref={reviewRef}>
        <Review {...props} />
      </div>
      <Organizers organizers={props.organizers} />
    </Flex>
  );
}

export default FestivalInfo;
