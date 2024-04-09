import classes from './ActionsModal.module.css'

type ActionsModalProps = {
   onClick: () => void
   onClick2: () => void
}

const ActionsModal = ({
   onClick,
   onClick2
}: ActionsModalProps) => {

   const modalOptions = [
      {
         action: onClick,
         title: 'Edit category',
         svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.2677 3.73223L20.9748 3.02513V3.02513L20.2677 3.73223ZM6.5 21.0355V22.0355C6.76522 22.0355 7.01957 21.9301 7.20711 21.7426L6.5 21.0355ZM3 21.0355H2C2 21.5878 2.44772 22.0355 3 22.0355V21.0355ZM3 17.4644L2.29289 16.7573C2.10536 16.9448 2 17.1992 2 17.4644H3ZM17.4393 4.43934C18.0251 3.85355 18.9748 3.85355 19.5606 4.43934L20.9748 3.02513C19.608 1.65829 17.3919 1.65829 16.0251 3.02513L17.4393 4.43934ZM19.5606 4.43934C20.1464 5.02513 20.1464 5.97487 19.5606 6.56066L20.9748 7.97487C22.3417 6.60804 22.3417 4.39196 20.9748 3.02513L19.5606 4.43934ZM19.5606 6.56066L5.79289 20.3284L7.20711 21.7426L20.9748 7.97487L19.5606 6.56066ZM6.5 20.0355H3V22.0355H6.5V20.0355ZM16.0251 3.02513L2.29289 16.7573L3.70711 18.1715L17.4393 4.43934L16.0251 3.02513ZM2 17.4644V21.0355H4V17.4644H2ZM14.5251 5.93934L18.0606 9.47487L19.4748 8.06066L15.9393 4.52513L14.5251 5.93934Z" fill="#2E2E2E" />
         </svg>
      },
      {
         action: onClick2,
         title: 'Delete category',
         svg: <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 5L15.1327 17.1425C15.0579 18.1891 14.187 19 13.1378 19H4.86224C3.81296 19 2.94208 18.1891 2.86732 17.1425L2 5M7 9V15M11 9V15M12 5V2C12 1.44772 11.5523 1 11 1H7C6.44772 1 6 1.44772 6 2V5M1 5H17" stroke="#DC362E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
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