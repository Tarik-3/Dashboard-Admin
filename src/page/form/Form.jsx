import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Alert, Button, MenuItem, Snackbar, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import Header from "../../components/Header";

const regEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const data = [
  {
    value: "Admin",
    label: "Admin",
  },
  
  {
    value: "Client",
    label: "Client",
  },
];

const Form = () => {
  const {
    register,
    handleSubmit,
    // @ts-ignore
    watch,
    formState: { errors },
  } = useForm();

  const [open, setOpen] = React.useState(false);

  // @ts-ignore
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const onSubmit = () => {
    console.log("doneeeeeeeeeeee");

    handleClick();
  };

  return (




<
// @ts-ignore
Box>
  
  
      <
// @ts-ignore
      Header title="CRÉER UN UTILISATEUR" subTitle="Créer un nouveau profil" />
  
      <
// @ts-ignore
      Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
        noValidate
        autoComplete="off"
      >
        <
// @ts-ignore
        Stack sx={{ gap: 2 }} direction={"row"}>
          <
// @ts-ignore
          TextField
            error={Boolean(errors.firstName)}
            helperText={
              Boolean(errors.firstName)
                ? "This field is required & min 3 character"
                : null
            }
            {...register("firstName", { required: true, minLength: 3 })}
            sx={{ flex: 1 }}
            label="Nom"
            variant="filled"
          />
  
          <
// @ts-ignore
          TextField
            error={Boolean(errors.lastName)}
            helperText={
              Boolean(errors.lastName)
                ? "Ce champ est obligatoire & minimum 3 caractères"
                : null
            }
            {...register("lastName", { required: true, minLength: 3 })}
            sx={{ flex: 1 }}
            label="Prenom"
            variant="filled"
          />
        </Stack>
  
        <

        TextField
          error={Boolean(errors.email)}
          helperText={
            Boolean(errors.email) ? "Please provide a valid email address" : null
          }
          {...register("email", { required: true, pattern: regEmail })}
          label="Email"
          variant="filled"
        />
  

        <

        TextField
        
          error={Boolean(errors.ContactNumber)}
          helperText={
            Boolean(errors.ContactNumber)
              ? "Please provide a valid Phone number"
              : null
          }
          {...register("ContactNumber", { required: true, pattern: phoneRegExp })}
          label="GSM"
          variant="filled"
        />
        <

        TextField label="Adress 1" variant="filled" />
        <

        TextField label="Adress 2" variant="filled" />
  
        <

        TextField
          variant="filled"
          id="outlined-select-currency"
          select
          label="Role"
          defaultValue="Client"
        >
          {data.map((option) => (
            <

            MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
  
        <

        Box sx={{ textAlign: "right" }}>
          <Button

          Button
            type="submit"
            sx={{ textTransform: "capitalize" }}
            variant="contained"
          >
            Créer un nouvel utilisateur
          </Button>
  
          <
// @ts-ignore
          Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
          >
            <
// @ts-ignore
            Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
                Compte créé avec succès
            </Alert>
          </Snackbar>
        </Box>
      </Box>
  
  
</Box>



);
};

export default Form;
