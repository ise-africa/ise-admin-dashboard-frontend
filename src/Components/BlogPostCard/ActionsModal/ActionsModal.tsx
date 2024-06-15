import classes from './ActionsModal.module.css'

type ActionsModalProps = {
   onClick: () => void
   onClick2: () => void
   onClick3: () => void
   onClick4: () => void
   onClick5: () => void
   onClick6: () => void
   onClick7: () => void
   onClick8: () => void
   onClick9: () => void
   status: string;
}

const ActionsModal = ({
   onClick,
   onClick2,
   onClick3,
   onClick4,
   onClick5,
   onClick6,
   onClick7,
   onClick8,
   onClick9,
   status,
}: ActionsModalProps) => {

   const modalOptions = [
      {
         action: onClick,
         title: 'Edit blogpost',
         status: "Publish" || "Draft",
         svg: <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.2677 1.73223L18.9748 1.02513V1.02513L18.2677 1.73223ZM4.5 19.0355V20.0355C4.76522 20.0355 5.01957 19.9301 5.20711 19.7426L4.5 19.0355ZM1 19.0355H0C0 19.5878 0.447715 20.0355 1 20.0355L1 19.0355ZM1 15.4644L0.292893 14.7573C0.105357 14.9448 0 15.1992 0 15.4644H1ZM15.4393 2.43934C16.0251 1.85355 16.9748 1.85355 17.5606 2.43934L18.9748 1.02513C17.608 -0.341709 15.3919 -0.341709 14.0251 1.02513L15.4393 2.43934ZM17.5606 2.43934C18.1464 3.02513 18.1464 3.97487 17.5606 4.56066L18.9748 5.97487C20.3417 4.60804 20.3417 2.39196 18.9748 1.02513L17.5606 2.43934ZM17.5606 4.56066L3.79289 18.3284L5.20711 19.7426L18.9748 5.97487L17.5606 4.56066ZM4.5 18.0355H1V20.0355H4.5V18.0355ZM14.0251 1.02513L0.292893 14.7573L1.70711 16.1715L15.4393 2.43934L14.0251 1.02513ZM0 15.4644V19.0355H2V15.4644H0ZM12.5251 3.93934L16.0606 7.47487L17.4748 6.06066L13.9393 2.52513L12.5251 3.93934Z" fill="#2E2E2E" />
         </svg>
      },
      {
         action: onClick2,
         status: "Publish",
         title: 'View blogpost',
         svg: <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.0007 8C14.0007 9.65685 12.6576 11 11.0007 11C9.34388 11 8.00073 9.65685 8.00073 8C8.00073 6.34315 9.34388 5 11.0007 5C12.6576 5 14.0007 6.34315 14.0007 8Z" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M1.45898 7.99997C2.73326 3.94288 6.52354 1 11.0012 1C15.4788 1 19.2691 3.94291 20.5434 8.00004C19.2691 12.0571 15.4788 15 11.0012 15C6.52354 15 2.73324 12.0571 1.45898 7.99997Z" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
         </svg>
      },
      {
         action: onClick3,
         status: "Publish",
         title: 'Share blogpost',
         svg: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.68387 11.3419C6.88616 10.9381 7 10.4824 7 10C7 9.51763 6.88616 9.06185 6.68387 8.65807M6.68387 11.3419C6.19134 12.3251 5.17449 13 4 13C2.34315 13 1 11.6569 1 10C1 8.34315 2.34315 7 4 7C5.17449 7 6.19134 7.67492 6.68387 8.65807M6.68387 11.3419L13.3161 14.6581M6.68387 8.65807L13.3161 5.34193M13.3161 5.34193C13.8087 6.32508 14.8255 7 16 7C17.6569 7 19 5.65685 19 4C19 2.34315 17.6569 1 16 1C14.3431 1 13 2.34315 13 4C13 4.48237 13.1138 4.93815 13.3161 5.34193ZM13.3161 14.6581C13.1138 15.0619 13 15.5176 13 16C13 17.6569 14.3431 19 16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.8255 13 13.8087 13.6749 13.3161 14.6581Z" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
         </svg>
      },
      {
         action: onClick4,
         status: "Publish",
         title: 'View report',
         svg: <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 15V13M8 15V11M11 15V9M13 19H3C1.89543 19 1 18.1046 1 17V3C1 1.89543 1.89543 1 3 1H8.58579C8.851 1 9.10536 1.10536 9.29289 1.29289L14.7071 6.70711C14.8946 6.89464 15 7.149 15 7.41421V17C15 18.1046 14.1046 19 13 19Z" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
         </svg>
      },
      {
         action: onClick5,
         status: "Publish",
         title: 'Revert to draft',
         svg: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1V6H1.58152M16.9381 8C16.446 4.05369 13.0796 1 9 1C5.64262 1 2.76829 3.06817 1.58152 6M1.58152 6H6M17 17V12H16.4185M16.4185 12C15.2317 14.9318 12.3574 17 9 17C4.92038 17 1.55399 13.9463 1.06189 10M16.4185 12H12" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
         </svg>
      },
      {
         action: onClick6,
         status: "Draft",
         title: 'Publish blogpost',
         svg: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 13L1 14C1 15.6569 2.34315 17 4 17L14 17C15.6569 17 17 15.6569 17 14L17 13M13 5L9 1M9 1L5 5M9 1L9 13" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
         </svg>
      },
      {
         action: onClick7,
         status: "Publish" || "Draft",
         title: 'Archive blogpost',
         svg: <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5H17M3 5C1.89543 5 1 4.10457 1 3C1 1.89543 1.89543 1 3 1H17C18.1046 1 19 1.89543 19 3C19 4.10457 18.1046 5 17 5M3 5L3 15C3 16.1046 3.89543 17 5 17H15C16.1046 17 17 16.1046 17 15V5M8 9H12" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
         </svg>
      },
      {
         action: onClick8,
         status: "Archive",
         title: 'Restore blogpost',
         svg: <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.2677 1.73223L18.9748 1.02513V1.02513L18.2677 1.73223ZM4.5 19.0355V20.0355C4.76522 20.0355 5.01957 19.9301 5.20711 19.7426L4.5 19.0355ZM1 19.0355H0C0 19.5878 0.447715 20.0355 1 20.0355L1 19.0355ZM1 15.4644L0.292893 14.7573C0.105357 14.9448 0 15.1992 0 15.4644H1ZM15.4393 2.43934C16.0251 1.85355 16.9748 1.85355 17.5606 2.43934L18.9748 1.02513C17.608 -0.341709 15.3919 -0.341709 14.0251 1.02513L15.4393 2.43934ZM17.5606 2.43934C18.1464 3.02513 18.1464 3.97487 17.5606 4.56066L18.9748 5.97487C20.3417 4.60804 20.3417 2.39196 18.9748 1.02513L17.5606 2.43934ZM17.5606 4.56066L3.79289 18.3284L5.20711 19.7426L18.9748 5.97487L17.5606 4.56066ZM4.5 18.0355H1V20.0355H4.5V18.0355ZM14.0251 1.02513L0.292893 14.7573L1.70711 16.1715L15.4393 2.43934L14.0251 1.02513ZM0 15.4644V19.0355H2V15.4644H0ZM12.5251 3.93934L16.0606 7.47487L17.4748 6.06066L13.9393 2.52513L12.5251 3.93934Z" fill="#2E2E2E" />
         </svg>
      },
      {
         action: onClick9,
         status: "Archive",
         title: 'Delete blogpost',
         svg: <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 5L15.1327 17.1425C15.0579 18.1891 14.187 19 13.1378 19H4.86224C3.81296 19 2.94208 18.1891 2.86732 17.1425L2 5M7 9V15M11 9V15M12 5V2C12 1.44772 11.5523 1 11 1H7C6.44772 1 6 1.44772 6 2V5M1 5H17" stroke="#DC362E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
         </svg>
      },
   ];

   const filteredOptions = modalOptions.filter(option => {
      if (status === "Publish" && ["Edit blogpost", "View blogpost", "Share blogpost", "View report", "Revert to draft", "Archive blogpost"].includes(option.title)) {
         return true;
      } else if (status === "Draft" && ["Edit blogpost", "Publish blogpost", "Archive blogpost"].includes(option.title)) {
         return true;
      } else if (status === "Archive" && ["Restore blogpost", "Delete blogpost"].includes(option.title)) {
         return true;
      }
      return false;
   });

   return (
      <div className={classes.container}>
         {filteredOptions.map((data, i) => (
            <div key={i} onClick={data.action}>
               {data.svg}
               <span className={data.title === 'Delete blogpost' ? classes.delete : ''}>{data.title}</span>
            </div>
         ))}
      </div>
   )
}

export default ActionsModal;