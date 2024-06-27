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
      >
        <When condition={type === TAB_KEYS.FESTIVAL}>
          <FestivalInfo {...props} setActiveKey={setActiveKey} activeKey={TAB_KEYS.FESTIVAL} />
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
  const { name, id, isOwner, entriesActive } = props;
  const [showModal, setShowModal] = useState(false);
  const { isLarge, isExtraLarge, isDoubleLarge } = useBreakpoint();
  const router = useRouter();
  const isLargeScreen = isLarge || isExtraLarge || isDoubleLarge;

  function handleEditClick() {
    router.push(CREATE_FESTIVAL_URL);
  }

  function handleMessageClick() {
    router.push(MESSAGE_URL);
  }

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
      <When condition={!isOwner || entriesActive}>
        <ProjectSelectionModal
          showModal={showModal}
          title={name}
          festivalId={id}
          onClose={() => setShowModal(false)}
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
      <FestivalAction {...props} />
    </Flex>
  );

  return (
    <div className="view-festival-page">
      {/* Navigation Bar */}
      <When condition={props.name}>
        <TopNavbar festivalData={props} />
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
    </div>
  );
}

export default ViewFestival;
