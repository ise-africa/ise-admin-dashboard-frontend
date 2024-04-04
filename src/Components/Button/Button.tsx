import classes from './Button.module.css'
import { CircularProgress } from '@mui/material'

type ButtonPropTypes = {
   children: React.ReactNode
   type?:
   | 'primary'
   | 'secondary'
   | 'tertiary'
   | 'null'
   | 'invalid'
   | 'delete'
   | 'black'
   | 'white'
   | 'deleteSecondary'
   className?: string
   disabled?: boolean
   onClick?: React.MouseEventHandler<HTMLButtonElement>
   loading?: boolean
}

const Button = ({
   children,
   type,
   disabled,
   onClick,
   loading,
   className,
}: ButtonPropTypes) => {
   return (
      <button
         className={`${classes.button} ${type === 'secondary'
            ? classes.secondary
            : type === 'tertiary'
               ? classes.tertiary
               : type === 'null'
                  ? classes.null
                  : type === 'invalid'
                     ? classes.invalidx
                     : type === 'delete'
                        ? classes.delete
                        : type === 'black'
                           ? classes.black
                           : type === 'white'
                              ? classes.white
                              : type === 'deleteSecondary'
                                 ? classes.deleteSecondary
                                 : classes.primary
            } ${className}`}
         onClick={onClick}
         disabled={disabled}
      >
         {loading ? (
            <CircularProgress size="1.5rem" color="inherit" />
         ) : (
            children
         )}
      </button>
   )
}

export default Button
