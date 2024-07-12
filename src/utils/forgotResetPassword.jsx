import { resetPassword } from 'aws-amplify/auth';

async function handleResetPassword(email) {
    try {
        const output = await resetPassword({ username: email });
        handleResetPasswordNextSteps(output);
    } catch (error) {
        console.log(error);
    }
}

function handleResetPasswordNextSteps(output) {
    const { nextStep } = output;
    switch (nextStep.resetPasswordStep) {
        case 'CONFIRM_RESET_PASSWORD_WITH_CODE':
            const codeDeliveryDetails = nextStep.codeDeliveryDetails;
            console.log(
                `Confirmation code was sent to ${codeDeliveryDetails.deliveryMedium}`
            );
            // Collect the confirmation code from the user and pass to confirmResetPassword.
            break;
        case 'DONE':
            console.log('Successfully reset password.');
            break;
    }
}

export default handleResetPassword