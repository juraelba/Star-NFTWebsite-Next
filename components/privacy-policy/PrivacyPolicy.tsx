import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from "./PrivacyPolicy.module.css";

const Terms = () => {
  const handleScrollDown = () => {
    window.scroll({
      top: window.innerHeight,
    });
  };

  return (
    <Box>
      <Box className={styles.heroContainer}>
        <Typography className={styles.title}>Privacy Policy</Typography>
        <Typography className={styles.description}>
          StarLedger, Inc. (“we,” “us,” or “our”) respects your privacy and is
          committed to protecting it through our compliance with this Policy.
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
        Last Updated May 27, 2022
        <br />
        <br />
        <Typography className={styles.subtitle}>I. Introduction</Typography>
        <br />
        StarLedger, Inc. (“we,” “us,” or “our”) respects your privacy and is
        committed to protecting it through our compliance with this Policy. This
        Policy describes the types of information we may collect from you or
        that you may provide to us, including when you visit our website at
        www.obierisk.com and any successor or affiliated website or subdomain
        thereof (collectively, our “Website”), and our practices for collecting,
        using, maintaining, protecting, and disclosing that information.
        <br />
        <br />
        ‍ This Policy applies to any information we collect through our Website,
        including any information you submit to us through web forms, e-mails or
        other electronic messages between you and our Website, and any
        information about you transferred to our Website from other websites or
        third parties. This Policy also applies to any information we collect
        about you when you e-mail, text or exchange other electronic messages
        with us or when you interact with messages you receive from us and any
        information we collect about you offline but that will be processed by
        automated means using our Website or other services. This Policy does
        not apply to any other information we collect by any other means.
        <br />
        <br />
        Please read this Policy carefully to understand our policies and
        practices regarding your information and how we will treat it. If you do
        not agree with our policies and practices, you can choose not to use our
        Website. By accessing or using our Website or by otherwise sharing
        information with us, you agree to this Policy. This Policy may change
        from time to time. When we make changes to this Policy, we will post the
        updated Policy on our Website and update the Policy’s “last modified”
        date. We will also provide notice of any material changes as explained
        in the section below titled “Changes to Our Privacy Policy.” Your
        continued use of our Website after we make changes is deemed to be
        acceptance of those changes.
        <br />
        <br />
        <Typography className={styles.subtitle}>
          II. Information Collected About You and How It Is Collected
        </Typography>
        <br />
        <b>Information We Collect</b>
        <br />
        <br />
        We may collect several types of information from and about users of our
        Website, including information by which such individuals may be
        personally identified or information about such individuals that is
        maintained in a personally identifiable form (collectively, “Personal
        Information”). Specifically, we may collect:
        <br />
        <br />
        Identifiers, such as your name, postal address, e-mail address, IP
        address or mobile device ID, account name, and phone number.
        <br />
        Information regarding the property you seek to insure and the owner of
        such property.
        <br />
        Payment information, such as credit card or debit card information,
        security codes, zip codes (for verification purposes) and other
        financial information used to process transactions related to products
        or services obtained through our Website.
        <br />
        Geolocation data for purposes of confirming your address information.{" "}
        <br />
        Technical Information
        <br />
        As you navigate through and interact with our Website, we may
        automatically collect certain traffic data, usage information, and
        technical information (collectively, “Technical Information”) about your
        device, such as your device’s operating system and browser type, file
        information, time-stamped logs regarding access times and duration of
        visits, and the pages of our Website that you visit. The technologies we
        use for this automatic data collection may include cookies that are
        stored on your browser or device, small embedded electronic files known
        as web beacons (also referred to as clear gifs, pixel tags and
        single-pixel gifs) and other types of embedded code. We collect
        Technical Information to manage our content and to improve users’ use of
        our Website; to count and review the number of visitors to our Website
        and their usage patterns; to track key performance indicators such as
        pages accessed, frequency of access and other statistical information
        related to our Website (for example, verifying system and server
        integrity); to recognize if a visitor is a return visitor to our
        Website; to store information about a user’s visits; and to remember a
        user’s preferences. You can set your browser to refuse all or some
        browser cookies. If you choose not to accept cookies, you may be unable
        to access certain parts or pages of our Website, or certain parts or
        features of our Website may not function properly. To learn more about
        cookies and how to disallow or manage them, go to:
        www.allaboutcookies.org/.
        <br />
        <br />
        <b>How We Collect Information</b>
        <br />
        <br />
        We primarily collect information, including Personal Information,
        directly from you when you create an account on our Website, request a
        quote or complete an application for insurance products, complete a
        transaction through our Website, register to receive marketing or
        informational materials from us, correspond with us via e-mail, text
        message, or telephone or through our Website or request additional
        services from us (such as customer support services). We also collect
        certain information automatically as you use our Website or interact
        with the e-mails and other electronic messages we send to you (see
        section above titled “Technical Information”).
        <br />
        <br />
        In addition, we may obtain certain Personal Information from third
        parties if we are required to verify information (e.g., for legal or
        regulatory compliance purposes) or if we need additional information in
        order to execute transactions or perform services on your behalf. These
        third parties may include your financial institution and credit
        reporting agencies.
      </Box>
    </Box>
  );
};

export default Terms;
