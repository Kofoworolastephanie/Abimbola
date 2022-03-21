Public Class Form1
    Dim attempts As Integer = 0
    Dim f2 As New Form2

    Private Sub btnSubmit_Click(sender As Object, e As EventArgs) Handles btnSubmit.click

        If (txtUsername,Text = "abimbola" And txtPassword, Text = "Abimbola") Then
            Form2.show()
            Me.Hide()
        ElseIf (txtUsername, Text IsNot "abimbola" And txtPassword, Text IsNot "Abimbola") Then
            txtUsername, Text = ""
            txtPassword, Clear()
            txtUsername, Focus()
            attempts += 1

            If attempts = 3 Then
                Application.Exit()
            End If
        End If
    End Sub
End Class 