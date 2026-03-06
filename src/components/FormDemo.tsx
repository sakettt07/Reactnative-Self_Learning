import { View, Text, ScrollView, TextInput, Button, Alert } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Formik } from "formik";
import * as Yup from "yup";

const FormDemo = () => {

    const validationSchema = Yup.object({
        name: Yup.string()
            .min(3, "Name must be at least 3 characters")
            .required("Name is required"),

        email: Yup.string()
            .email("Enter a valid email")
            .required("Email is required"),

        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
    });

    return (
        <SafeAreaView
            style={{
                flex: 1,
                justifyContent: "center",
                padding: 20,
            }}
        >
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    password: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    Alert.alert("Form Values", JSON.stringify(values));
                }}
            >
                {({
                    values,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    errors,
                    touched,
                }) => (
                    <ScrollView>

                        <Text>Name</Text>
                        <TextInput
                            style={{ borderWidth: 1, marginBottom: 5, padding: 8 }}
                            value={values.name}
                            onChangeText={handleChange("name")}
                            onBlur={handleBlur("name")}
                            placeholder="Enter name"
                        />
                        {touched.name && errors.name && (
                            <Text style={{ color: "red" }}>{errors.name}</Text>
                        )}

                        <Text>Email</Text>
                        <TextInput
                            style={{ borderWidth: 1, marginBottom: 5, padding: 8 }}
                            value={values.email}
                            onChangeText={handleChange("email")}
                            onBlur={handleBlur("email")}
                            placeholder="Enter email"
                        />
                        {touched.email && errors.email && (
                            <Text style={{ color: "red" }}>{errors.email}</Text>
                        )}

                        <Text>Password</Text>
                        <TextInput
                            style={{ borderWidth: 1, marginBottom: 5, padding: 8 }}
                            value={values.password}
                            onChangeText={handleChange("password")}
                            onBlur={handleBlur("password")}
                            placeholder="Enter password"
                            secureTextEntry
                        />
                        {touched.password && errors.password && (
                            <Text style={{ color: "red" }}>{errors.password}</Text>
                        )}

                        <Button title="Submit" onPress={handleSubmit} />

                    </ScrollView>
                )}
            </Formik>
        </SafeAreaView>
    );
};

export default FormDemo;