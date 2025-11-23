import { motion } from 'framer-motion';
import logo from '@/assets/obsfly_logo_2.png';

interface ObsFlyLogoProps {
  className?: string;
  animated?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const ObsFlyLogo = ({ className = '', animated = true, size = 'md' }: ObsFlyLogoProps) => {
  const sizes = {
    sm: '120px',
    md: '130px',
    lg: '50px'
  };

  const height = sizes[size];

  const logoVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      className={className}
    
      initial="initial"
      animate="animate"
      style={{ marginLeft: '-12px' }}
    >
      <img
        src={logo}
        alt="ObsFly Logo"
        style={{ 
          height: height,
          width: 'auto',
          display: 'block'
        }}
      />
    </motion.div>
  );
};

export default ObsFlyLogo;