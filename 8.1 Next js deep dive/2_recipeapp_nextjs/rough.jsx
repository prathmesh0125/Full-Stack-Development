
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
