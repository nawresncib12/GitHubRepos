import classes from "./More.module.css";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import IconTitle from "../shared/IconTitle";
import Button from "../shared/Button";
import { useMode } from "../../context/ModeContext";
interface MoreProps {
  home: () => void;
}
const More = ({ home }: MoreProps) => {
  const { mode } = useMode();
  return (
    <div className={classes.more}>
      <div className={classes.description}>
        <h1>More questions?</h1>
        <p>Answers are just a message away1</p>
        <div className={classes.socials}>
          <IconTitle
            icon={faLinkedin}
            color="#0072b1"
            text="linkedin.com/in/nawres-ncib/"
            link
          />
          <IconTitle
            icon={faGithub}
            color="#171515"
            text="github.com/nawresncib12"
            link
          />
          <IconTitle
            icon={faEnvelope}
            color="#549d62"
            text="ncibnawres04@gmail.com"
          />
        </div>
        <Button onClick={home} type="secondary" text="Home" />
      </div>
      <svg
        width="328"
        height="336"
        viewBox="0 0 328 336"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M73.7142 335.549C79.7358 335.549 84.6173 333.718 84.6173 331.46C84.6173 329.202 79.7358 327.372 73.7142 327.372C67.6925 327.372 62.811 329.202 62.811 331.46C62.811 333.718 67.6925 335.549 73.7142 335.549Z"
          fill={`${mode === "light" ? "#2F2E41" : "#4078C0"}`}
        />
        <path
          d="M99.8817 335.004C105.903 335.004 110.785 333.173 110.785 330.915C110.785 328.657 105.903 326.826 99.8817 326.826C93.86 326.826 88.9785 328.657 88.9785 330.915C88.9785 333.173 93.86 335.004 99.8817 335.004Z"
          fill={`${mode === "light" ? "#2F2E41" : "#4078C0"}`}
        />
        <path
          d="M134.62 266.281C144.923 260.341 151.764 252.904 149.9 249.67C148.035 246.435 138.171 248.628 127.868 254.568C117.564 260.507 110.723 267.944 112.588 271.179C114.453 274.413 124.317 272.221 134.62 266.281Z"
          fill={`${mode === "light" ? "#2F2E41" : "#4078C0"}`}
        />
        <path
          d="M124.948 280.845C128.758 257.367 112.814 235.245 89.3354 231.435C65.8571 227.625 43.7355 243.569 39.9255 267.048C36.1155 290.526 52.0598 312.648 75.5381 316.458C99.0164 320.268 121.138 304.323 124.948 280.845Z"
          fill={`${mode === "light" ? "#2F2E41" : "#4078C0"}`}
        />
        <path
          d="M75.8948 307.746H62.811V331.188H75.8948V307.746Z"
          fill={`${mode === "light" ? "#2F2E41" : "#4078C0"}`}
        />
        <path
          d="M102.062 307.746H88.9785V331.188H102.062V307.746Z"
          fill={`${mode === "light" ? "#2F2E41" : "#4078C0"}`}
        />
        <path
          d="M83.5268 277.762C91.656 277.762 98.2461 271.172 98.2461 263.043C98.2461 254.914 91.656 248.324 83.5268 248.324C75.3976 248.324 68.8076 254.914 68.8076 263.043C68.8076 271.172 75.3976 277.762 83.5268 277.762Z"
          fill="white"
        />
        <path
          d="M83.527 267.95C86.2368 267.95 88.4334 265.753 88.4334 263.043C88.4334 260.333 86.2368 258.137 83.527 258.137C80.8173 258.137 78.6206 260.333 78.6206 263.043C78.6206 265.753 80.8173 267.95 83.527 267.95Z"
          fill="#3F3D56"
        />
        <path
          d="M40.6596 233.895C37.1822 218.321 48.2983 202.585 65.4883 198.746C82.6782 194.908 99.4325 204.421 102.91 219.995C106.387 235.569 94.995 241.313 77.8051 245.151C60.6151 248.989 44.1371 249.469 40.6596 233.895Z"
          fill="#E6E6E6"
        />
        <path
          d="M53.3846 263.191C54.9845 259.817 47.5706 252.951 36.8252 247.855C26.0798 242.759 16.072 241.362 14.4721 244.735C12.8722 248.108 20.286 254.974 31.0314 260.071C41.7768 265.167 51.7847 266.564 53.3846 263.191Z"
          fill={`${mode === "light" ? "#2F2E41" : "#4078C0"}`}
        />
        <path
          d="M61.2817 289.483C61.2817 293.698 72.135 302.022 84.1783 302.022C96.2215 302.022 107.513 290.155 107.513 285.94C107.513 281.725 96.2215 286.758 84.1783 286.758C72.135 286.758 61.2817 285.268 61.2817 289.483Z"
          fill="white"
        />
        <path
          d="M232.609 335.549C238.63 335.549 243.512 333.718 243.512 331.46C243.512 329.202 238.63 327.372 232.609 327.372C226.587 327.372 221.706 329.202 221.706 331.46C221.706 333.718 226.587 335.549 232.609 335.549Z"
          fill={`${mode === "light" ? "#2F2E41" : "#4078C0"}`}
        />
        <path
          d="M206.441 335.004C212.463 335.004 217.344 333.173 217.344 330.915C217.344 328.657 212.463 326.826 206.441 326.826C200.42 326.826 195.538 328.657 195.538 330.915C195.538 333.173 200.42 335.004 206.441 335.004Z"
          fill={`${mode === "light" ? "#2F2E41" : "#4078C0"}`}
        />
        <path
          d="M193.735 271.179C195.6 267.944 188.759 260.507 178.456 254.568C168.152 248.628 158.288 246.435 156.424 249.67C154.559 252.904 161.4 260.341 171.703 266.281C182.006 272.221 191.87 274.414 193.735 271.179Z"
          fill={`${mode === "light" ? "#2F2E41" : "#4078C0"}`}
        />
        <path
          d="M223.886 317.014C247.672 317.014 266.954 297.732 266.954 273.946C266.954 250.161 247.672 230.879 223.886 230.879C200.101 230.879 180.819 250.161 180.819 273.946C180.819 297.732 200.101 317.014 223.886 317.014Z"
          fill={`${mode === "light" ? "#2F2E41" : "#4078C0"}`}
        />
        <path
          d="M243.512 307.746H230.428V331.188H243.512V307.746Z"
          fill={`${mode === "light" ? "#2F2E41" : "#4078C0"}`}
        />
        <path
          d="M217.344 307.746H204.261V331.188H217.344V307.746Z"
          fill={`${mode === "light" ? "#2F2E41" : "#4078C0"}`}
        />
        <path
          d="M213.796 277.762C221.925 277.762 228.515 271.172 228.515 263.043C228.515 254.914 221.925 248.324 213.796 248.324C205.667 248.324 199.077 254.914 199.077 263.043C199.077 271.172 205.667 277.762 213.796 277.762Z"
          fill="white"
        />
        <path
          d="M210.249 264.5C212.172 262.579 212.184 259.474 210.277 257.565C208.37 255.656 205.265 255.666 203.343 257.587C201.42 259.507 201.408 262.612 203.315 264.521C205.222 266.43 208.327 266.42 210.249 264.5Z"
          fill="#3F3D56"
        />
        <path
          d="M228.518 245.151C211.328 241.313 199.935 235.569 203.413 219.995C206.89 204.421 223.645 194.908 240.835 198.746C258.025 202.584 269.141 218.321 265.663 233.895C262.186 249.469 245.708 248.989 228.518 245.151Z"
          fill={`${mode === "light" ? "#4078C0" : "#fff"}`}
        />
        <path
          d="M268.922 306.775C272.53 305.817 272.981 295.722 269.928 284.228C266.875 272.733 261.475 264.192 257.867 265.151C254.258 266.109 253.808 276.204 256.861 287.698C259.914 299.193 265.314 307.733 268.922 306.775Z"
          fill={`${mode === "light" ? "#2F2E41" : "#4078C0"}`}
        />
        <path
          d="M214.129 286.758C206.222 286.758 198.809 281.725 198.809 285.94C198.809 290.156 206.222 302.022 214.129 302.022C222.036 302.022 229.161 293.699 229.161 289.484C229.161 285.269 222.036 286.758 214.129 286.758Z"
          fill="white"
        />
        <path
          d="M158.472 202.539H154.647C151.221 202.535 147.936 201.172 145.514 198.75C143.091 196.327 141.728 193.042 141.724 189.616V186.405C141.724 178.452 143.231 171.793 146.203 166.613C149.805 160.587 154.007 154.941 158.745 149.761C161.891 146.598 164.745 143.158 167.273 139.482C169.087 136.627 170.023 133.302 169.966 129.92C169.966 121.942 164.769 118.063 154.076 118.063C148.144 118.131 142.25 119.015 136.561 120.692C134.366 121.319 132.057 121.427 129.813 121.009C127.57 120.592 125.454 119.659 123.633 118.284C121.811 116.91 120.333 115.132 119.316 113.089C118.298 111.047 117.768 108.796 117.768 106.514V100.014C117.756 97.216 118.555 94.4743 120.069 92.1213C121.584 89.7684 123.748 87.9053 126.3 86.7578C136.349 82.4694 147.186 80.3375 158.11 80.5C169.555 80.5 179.886 82.4224 188.817 86.2129C197.765 90.0122 204.835 95.3696 209.829 102.137C214.808 108.856 217.454 117.018 217.365 125.381C217.365 134.361 214.913 142.182 210.078 148.627C205.296 155.007 198.441 161.992 189.702 169.388C185.098 173.217 180.735 177.327 176.639 181.694C173.993 184.544 172.123 188.026 171.208 191.806C170.698 194.812 169.138 197.541 166.806 199.506C164.475 201.471 161.521 202.546 158.472 202.539V202.539Z"
          fill={`${mode === "light" ? "#4078C0" : "#fff"}`}
        />
        <path
          d="M156.345 263.311H155.841C149.491 263.306 143.403 260.781 138.915 256.29C134.427 251.799 131.905 245.709 131.905 239.359C131.905 233.01 134.427 226.92 138.915 222.429C143.403 217.938 149.491 215.412 155.841 215.408H156.345C159.492 215.406 162.608 216.024 165.516 217.227C168.424 218.43 171.066 220.194 173.291 222.418C175.517 224.642 177.283 227.283 178.487 230.19C179.692 233.097 180.312 236.213 180.312 239.359C180.312 242.506 179.692 245.622 178.487 248.529C177.283 251.436 175.517 254.077 173.291 256.301C171.066 258.525 168.424 260.289 165.516 261.492C162.608 262.695 159.492 263.313 156.345 263.311Z"
          fill={`${mode === "light" ? "#4078C0" : "#fff"}`}
        />
        <path
          d="M312 336H1C0.734784 336 0.480444 335.895 0.292908 335.707C0.105371 335.52 0 335.265 0 335C0 334.735 0.105371 334.48 0.292908 334.293C0.480444 334.105 0.734784 334 1 334H312C312.265 334 312.52 334.105 312.707 334.293C312.895 334.48 313 334.735 313 335C313 335.265 312.895 335.52 312.707 335.707C312.52 335.895 312.265 336 312 336Z"
          fill="#CCCCCC"
        />
      </svg>
    </div>
  );
};

export default More;
