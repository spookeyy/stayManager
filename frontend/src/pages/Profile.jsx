import React, { useState, useEffect, useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { UserContext} from "../context/AuthContext";

const ProfileSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone_number: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Must be at least 10 digits"),
});

function Profile() {
  const { user } = useContext(UserContext);
  const [profileData, setProfileData] = useState(null);
  const [updateMessage, setUpdateMessage] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`http://localhost:5000/users/${user.id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` },
        });
        if (response.ok) {
          const data = await response.json();
          setProfileData(data);
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    if (user) {
      fetchProfile();
    }
  }, [user]);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await fetch(`http://localhost:5000/users/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setUpdateMessage("Profile updated successfully");
        setProfileData(values);
      } else {
        setUpdateMessage("Failed to update profile");
      }
    } catch (error) {
      setUpdateMessage("An error occurred while updating profile");
    }
    setSubmitting(false);
  };

  if (!profileData) return <div>Loading...</div>;

  return (
    <div>
      <h2>Profile</h2>
      <Formik
        initialValues={profileData}
        validationSchema={ProfileSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <Field type="text" name="username" placeholder="Username" />
              <ErrorMessage name="username" component="div" />
            </div>
            <div>
              <Field type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <Field
                type="text"
                name="phone_number"
                placeholder="Phone Number"
              />
              <ErrorMessage name="phone_number" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Update Profile
            </button>
          </Form>
        )}
      </Formik>
      {updateMessage && <div>{updateMessage}</div>}
    </div>
  );
}

export default Profile;
