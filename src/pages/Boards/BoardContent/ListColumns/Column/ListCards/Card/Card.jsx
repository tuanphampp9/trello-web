import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'
import { Button, Typography } from '@mui/material'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
function CardItem({ card }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: card._id, data:{ ...card } })

  const dndKitCardStyle = {
    // touchAction: 'none',//for case pointer sensor
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    border:isDragging ? '1px solid #2ecc71' : 'none'
  }
  const shouldShowCardActions = card.memberIds.length > 0 || card.comments.length > 0 || card.attachments.length > 0
  return (
    <Card
      ref={setNodeRef} style={dndKitCardStyle} {...attributes} {...listeners}
      sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
        overflow: 'unset'
      }}>
      {card?.cover && (
        <CardMedia
          sx={{ height: 140 }}
          image={card.cover}

        />
      ) }

      <CardContent sx={{
        p:1.5,
        '&:last-child':{
          p:1.5
        }
      }}>
        <Typography>
          {card.title}
        </Typography>
      </CardContent>
      {shouldShowCardActions && (<CardActions
        sx={{
          p: '0 4px 8px 4px'
        }}

      >
        {card.memberIds.length > 0 && (<Button size="small"
          startIcon={<GroupIcon />}
        >
          {card.memberIds.length}
        </Button>)}
        {card.comments.length > 0 && (
          <Button size="small"
            startIcon={<CommentIcon />}
          >
            {card.comments.length}
          </Button>
        )}
        {card.attachments.length > 0 && (<Button size="small"
          startIcon={<AttachmentIcon />}
        >
          10
        </Button>)}

      </CardActions>)}
    </Card>
  )
}

export default CardItem