import { View } from 'app/design'
import Dialog from 'react-native-dialog'
const RemoveAddressDialog = ({
  setShowDialog,
  showDialog = false,
  removeAddress,
}: {
  setShowDialog: () => void
  showDialog: boolean
  removeAddress: () => void
}) => {
  const handleCancel = () => {
    setShowDialog(false)
  }

  const handleDelete = () => {
    removeAddress()
    setShowDialog(false)
  }
  return (
    <View>
      <Dialog.Container visible={showDialog}>
        <Dialog.Title>Remove Address</Dialog.Title>
        <Dialog.Description>
          Do you want to delete addresss? You cannot undo this action.
        </Dialog.Description>
        <Dialog.Button label="Cancel" onPress={handleCancel} />
        <Dialog.Button label="Delete" onPress={handleDelete} color="red" />
      </Dialog.Container>
    </View>
  )
}

export default RemoveAddressDialog
