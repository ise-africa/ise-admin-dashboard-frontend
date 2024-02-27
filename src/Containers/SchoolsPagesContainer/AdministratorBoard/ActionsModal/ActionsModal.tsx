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
         title: 'View Permission',
         svg: <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1H17M1 5H17M1 9H17M1 13H17" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
         </svg>
      },
      {
         action: onClick2,
         title: 'View user details',
         svg: <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5C12 7.20914 10.2091 9 8 9C5.79086 9 4 7.20914 4 5C4 2.79086 5.79086 1 8 1C10.2091 1 12 2.79086 12 5Z" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8 12C4.13401 12 1 15.134 1 19H15C15 15.134 11.866 12 8 12Z" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
         </svg>
      },
      {
         action: onClick3,
         title: 'Resend invite',
         svg: <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H18C18.5304 0 19.0391 0.210714 19.4142 0.585786C19.7893 0.960859 20 1.46957 20 2V14C20 14.5304 19.7893 15.0391 19.4142 15.4142C19.0391 15.7893 18.5304 16 18 16H2C1.46957 16 0.960859 15.7893 0.585786 15.4142C0.210714 15.0391 0 14.5304 0 14V2ZM3.519 2L10 7.671L16.481 2H3.519ZM18 3.329L10.659 9.753C10.4766 9.91278 10.2424 10.0009 10 10.0009C9.75755 10.0009 9.52336 9.91278 9.341 9.753L2 3.329V14H18V3.329Z" fill="#2E2E2E" />
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
