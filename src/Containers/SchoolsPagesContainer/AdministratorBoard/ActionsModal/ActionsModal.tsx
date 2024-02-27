import classes from './ActionsModal.module.css'

type ActionsModalProps = {
   onClick?: () => void
   onClick2?: () => void
   onClick3?: () => void
}

const ActionsModal = ({
   onClick,
   onClick2,
   onClick3
}: ActionsModalProps) => {
   const modalOptions = [
      {
         action: onClick,
         title: 'Reschedule session',
         svg: <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.9166 8.08333L16.2505 9.75L14.5833 8.08333M16.4542 9.33333C16.4845 9.05972 16.5 8.78167 16.5 8.5C16.5 4.35786 13.1421 1 9 1C4.85786 1 1.5 4.35786 1.5 8.5C1.5 12.6421 4.85786 16 9 16C11.3561 16 13.4584 14.9136 14.8333 13.2144M9 4.33333V8.5L11.5 10.1667" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
         </svg>
      },
      {
         action: onClick2,
         title: 'Request reschedule',
         svg: <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.2686 10.5555C18.3122 10.2102 18.3346 9.85838 18.3346 9.5013C18.3346 4.89893 14.6037 1.16797 10.0013 1.16797C5.39893 1.16797 1.66797 4.89893 1.66797 9.5013C1.66797 14.1037 5.39893 17.8346 10.0013 17.8346C10.3641 17.8346 10.7216 17.8114 11.0722 17.7665M10.0013 4.5013V9.5013L13.1166 11.059M15.8346 17.8346V12.8346M13.3346 15.3346H18.3346" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
         </svg>
      },
      {
         action: onClick3,
         title: 'Edit location',
         svg: <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.7127 12.3807C11.9852 13.1083 10.5176 14.5758 9.41213 15.6813C8.63108 16.4624 7.36629 16.4623 6.58524 15.6813C5.49962 14.5957 4.05916 13.1552 3.28465 12.3807C0.681157 9.77722 0.681157 5.55612 3.28465 2.95262C5.88815 0.349126 10.1092 0.349126 12.7127 2.95262C15.3162 5.55612 15.3162 9.77722 12.7127 12.3807Z" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10.4987 7.66667C10.4987 9.04738 9.37941 10.1667 7.9987 10.1667C6.61799 10.1667 5.4987 9.04738 5.4987 7.66667C5.4987 6.28596 6.61799 5.16667 7.9987 5.16667C9.37941 5.16667 10.4987 6.28596 10.4987 7.66667Z" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
         </svg>
      },
   ];
   return (
      <div className={classes.container}>
         {modalOptions.map((data, i) => (
            <>
               <div key={i} onClick={data.action}>
                  {data.svg}
                  <span>{data.title}</span>
               </div>
            </>
         ))}
      </div>
   )
}

export default ActionsModal
