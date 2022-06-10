import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from "./Terms.module.css";

const Terms = () => {
  const handleScrollDown = () => {
    window.scroll({
      top: window.innerHeight,
    });
  };

  return (
    <Box className={styles.termsContainer}>
      <Box className={styles.heroContainer}>
        <Typography className={styles.title}>Terms and Conditions</Typography>
        <Typography className={styles.description}>
          Please read these terms and conditions ("Terms") before using this
          site.
        </Typography>
        <Image
          src="/images/icons/scroll-down.svg"
          width={24}
          height={48}
          alt=":( Not Found"
          className={styles.scrollDown}
          onClick={handleScrollDown}
        />
      </Box>
      <Box className={styles.body}>
        <b>Terms and Conditions</b>
        <br />
        <br />
        These Terms of Use constitute a legally binding agreement made between
        you, whether personally or on behalf of an entity (“you”) and StarLedger
        LLC ("Company," “we," “us," or “our”), concerning your access to and use
        of the https://www.starledger.org/ website as well as any other media
        form, media channel, mobile website or mobile application related,
        linked, or otherwise connected thereto (collectively, the “Site”).
        <br />
        <br />
        The Site and Services are offered and available to users who are 18
        years of age or older and who reside in the United States. If you are
        agreeing to be bound by these Terms on behalf of your employer or
        another entity, you must have the full legal authority to bind your
        employer or such entity to these Terms. By using the Site or Services,
        you represent and warrant that you meet all of the foregoing eligibility
        requirements and that all information provided by you to us is truthful,
        accurate and complete. If you do not meet all of these requirements (as
        applicable), you must not access or use the Site or Services.
        <br />
        <br />
        ‍ Your use of the Site and Services is also subject to our Privacy
        Policy, Compensation Disclosure, Agreement to Engage in Electronic
        Transactions, and State Fraud Notices (collectively, the “Additional
        Terms”). By continuing to access or use the Site or Services, you
        acknowledge that you have read and understand the Additional Terms and
        agree to be bound by them as well. If you do not want to agree to the
        Additional Terms, you should immediately cease your current access and
        use of the Site and Services and should not provide any personal
        information to us or engage in any transactions with us.
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget erat
        in lorem condimentum lobortis. Maecenas pellentesque felis orci, nec
        tempus sapien interdum quis. Suspendisse rhoncus porta elit id
        sollicitudin. Mauris nec metus iaculis, placerat neque vel, tempus
        purus. In volutpat pulvinar nunc nec interdum. Sed ultricies in dui et
        ultricies. Nulla at ultrices tellus.
        <br />
        <br />
        Nullam fermentum erat quis nunc lobortis, sit amet tincidunt turpis
        vestibulum. Cras id risus et risus ornare faucibus. Proin vestibulum
        molestie venenatis. Vestibulum ante ipsum primis in faucibus orci luctus
        et ultrices posuere cubilia curae; Suspendisse blandit rhoncus magna vel
        ultricies. Morbi vehicula hendrerit sem, sed luctus purus hendrerit sed.
        Nullam diam dolor, mattis vestibulum bibendum in, bibendum vel nisi.
        Vestibulum tempor, neque aliquam gravida semper, lorem elit dignissim
        purus, a mattis nunc diam id nunc. Cras nec consequat turpis, non
        laoreet felis. Proin fermentum, ipsum quis pellentesque imperdiet, dolor
        enim convallis nulla, vitae placerat eros risus et enim. Suspendisse et
        venenatis lectus. Suspendisse vestibulum eros vel vulputate tempor.
        <br />
        <br />
        Nulla dui nisl, scelerisque et nunc quis, luctus finibus sem. Aliquam
        erat volutpat. Quisque in quam consequat, gravida urna at, sodales sem.
        Maecenas at purus ac risus finibus auctor. Pellentesque nec elit lorem.
        Vivamus molestie lorem sed elit luctus egestas posuere tempor magna.
        Nulla lacinia condimentum arcu in tempor. Etiam malesuada nunc nisl,
        condimentum tempor dolor pharetra eget. Suspendisse potenti.
        <br />
        <br />
        Our Site is hosted in the United States and our Services are provided
        from the United States. It is possible that certain information will be
        stored on servers in multiple other countries on the “cloud” or other
        similar distributed hosting platforms. If you are a user accessing our
        Site from Europe, Asia or any other region with laws governing personal
        data collection, use, and disclosure that differ from United States
        laws, you are expressly and knowingly consenting to the transfer of your
        personal information to the United States and other jurisdictions as
        indicated above and to our use of your personal information in
        accordance with our Privacy Policy.
        <br />
        <br />
        PLEASE READ THESE TERMS CAREFULLY TO ENSURE THAT YOU UNDERSTAND EACH
        PROVISION. THESE TERMS CONTAIN A MANDATORY INDIVIDUAL ARBITRATION AND
        CLASS ACTION/JURY TRIAL WAIVER PROVISION THAT REQUIRES THE USE OF
        ARBITRATION ON AN INDIVIDUAL BASIS TO RESOLVE DISPUTES, RATHER THAN JURY
        TRIALS OR CLASS ACTIONS.
        <br />
        <br />
        You agree that by accessing the Site, you have read, understood, and
        agreed to be bound by all of these Terms of Use. IF YOU DO NOT AGREE
        WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM
        USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY. Supplemental
        terms and conditions or documents that may be posted on the Site from
        time to time are hereby expressly incorporated herein by reference. We
        reserve the right, in our sole discretion, to make changes or
        modifications to these Terms of Use at any time and for any reason. We
        will alert you about any changes by updating the “Last updated” date of
        these Terms of Use, and you waive any right to receive specific notice
        of each such change. Please ensure that you check the applicable Terms
        every time you use our Site so that you understand which Terms apply.
      </Box>
    </Box>
  );
};

export default Terms;
