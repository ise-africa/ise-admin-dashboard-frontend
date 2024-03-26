import classes from './ActionsModal.module.css'

type ActionsModalProps = {
   onClick?: () => void
   onClick2?: () => void
   onClick3?: () => void
}

const ActionsModal = ({
   onClick,
   onClick2,
   onClick3,
}: ActionsModalProps) => {
   return (
      <div className={classes.container}>
         <span onClick={onClick}>View details</span>
         <span onClick={onClick2}>Resend feedback</span>
         <span onClick={onClick3}>Delete module</span>
      </div>
   )
}

export default ActionsModal
